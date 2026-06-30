"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";

type Country = {
  name: string;
  code: string;
};

const featuredCountries: Country[] = [
  { name: "Romania", code: "RO" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Germany", code: "DE" },
  { name: "United Arab Emirates", code: "AE" },
];

const countries: Country[] = Intl.DisplayNames
  ? Intl.supportedValuesOf("region")
      .map((code) => ({
        code,
        name:
          new Intl.DisplayNames(["en"], {
            type: "region",
          }).of(code) || code,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  : [];

type Props = {
  value?: Country | null;
  onChange: (country: Country) => void;
};

export default function CountrySelector({
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", outside);

    return () => {
      document.removeEventListener("mousedown", outside);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!search) return countries;

    return countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-4" ref={ref}>
      <div className="grid gap-4 md:grid-cols-3">
        {featuredCountries.map((country) => (
          <button
            key={country.code}
            onClick={() => onChange(country)}
            className={`rounded-2xl border p-5 transition ${
              value?.code === country.code
                ? "border-violet-500 bg-violet-500/10"
                : "border-white/10 bg-black/30 hover:border-violet-400"
            }`}
          >
            <div className="flex items-center gap-3">
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                }}
              />

              <span>{country.name}</span>
            </div>
          </button>
        ))}

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-2xl border border-dashed border-white/15 bg-black/30 p-5 hover:border-violet-400 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🌍</span>

            <span>
              {value &&
              !featuredCountries.find(
                (c) => c.code === value.code
              )
                ? value.name
                : "Choose another country"}
            </span>
          </div>
        </button>
      </div>

      {open && (
        <div className="rounded-3xl border border-white/10 bg-[#090909] p-5">
          <input
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-violet-500"
          />

          <div className="max-h-80 overflow-y-auto space-y-2">
            {filtered.map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  onChange(country);
                  setOpen(false);
                  setSearch("");
                }}
                className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition"
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "1.4em",
                    height: "1.4em",
                  }}
                />

                <span>{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

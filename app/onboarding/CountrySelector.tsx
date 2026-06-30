"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";

import { countries, type Country } from "@/lib/countries";

const featuredCountries: Country[] = [
  {
    name: "Romania",
    code: "RO",
    currency: "RON",
    language: "Romanian",
  },
  {
    name: "United Kingdom",
    code: "GB",
    currency: "GBP",
    language: "English",
  },
  {
    name: "United States",
    code: "US",
    currency: "USD",
    language: "English",
  },
  {
    name: "Germany",
    code: "DE",
    currency: "EUR",
    language: "German",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    currency: "AED",
    language: "Arabic",
  },
];

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
    <div className="space-y-6" ref={ref}>

      {/* Featured Countries */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

        {featuredCountries.map((country) => (

          <button
            key={country.code}
            onClick={() => onChange(country)}
            className={`group relative overflow-hidden rounded-3xl border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
              value?.code === country.code
                ? "border-violet-500 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,.25)]"
                : "border-white/10 bg-white/[0.03] hover:border-violet-400 hover:bg-white/[0.05]"
            }`}
          >

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative flex items-center gap-4">

              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
              />

              <div>

                <p className="font-medium text-white">
                  {country.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  {country.code}
                </p>

              </div>

            </div>

          </button>

        ))}

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-white/[0.05]"
        >
          <div className="flex items-center gap-4">

            <span className="text-3xl">
              🌍
            </span>

            <div className="text-left">

              <p className="font-medium text-white">
                {value &&
                !featuredCountries.find(
                  (c) => c.code === value.code
                )
                  ? value.name
                  : "Choose another country"}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                ALL COUNTRIES
              </p>

            </div>

          </div>
        </button>

      </div>

      {/* Dropdown */}

      {open && (

        <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 backdrop-blur-xl">

          <div className="relative mb-5">

            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>

            <input
              placeholder="Search by country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-12 pr-4 outline-none transition focus:border-violet-500"
            />

          </div>

          <div className="max-h-[420px] space-y-2 overflow-y-auto pr-2">

            {filtered.map((country) => (

              <button
                key={country.code}
                onClick={() => {
                  onChange(country);
                  setOpen(false);
                  setSearch("");
                }}
                className="flex w-full items-center gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-violet-500/40 hover:bg-white/[0.03]"
              >

                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "1.8em",
                    height: "1.8em",
                  }}
                />

                <div className="text-left">

                  <p className="text-white">
                    {country.name}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                    {country.code}
                  </p>

                </div>

              </button>

            ))}

          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/35">
            {filtered.length} countries available
          </div>

        </div>

      )}

    </div>
  );
}

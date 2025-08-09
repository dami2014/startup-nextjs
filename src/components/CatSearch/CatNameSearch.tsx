"use client";

import { useState, useMemo } from "react";
import SectionTitle from "../Common/SectionTitle";
import { CAT_NAMES } from "./catData";

const ALL_CATEGORIES = Array.from(
  new Set(CAT_NAMES.flatMap((c) => c.categories))
).sort();

export default function CatNameSearch(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    () => new Set()
  );

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const resetFilters = () => {
    setSearchText("");
    setActiveCategories(new Set());
  };

  const filtered = useMemo(() => {
    const text = searchText.trim().toLowerCase();
    return CAT_NAMES.filter((item) => {
      // text match: name or description
      const textMatch =
        text === "" ||
        item.name.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text) ||
        item.categories.some((c) => c.toLowerCase().includes(text));

      // category match: if any active categories, item must include all active ones (AND logic).
      const cats = Array.from(activeCategories);
      const categoryMatch =
        cats.length === 0 || cats.every((ac) => item.categories.includes(ac));

      return textMatch && categoryMatch;
    });
  }, [searchText, activeCategories]);

  return (
    <section id="cat-names" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Cat Name Finder"
          paragraph="Find the perfect name for your cat — filter by gender, color, breed hints or vibe, and read each name's meaning."
          mb="44px"
        />

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center gap-3">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name, meaning, or category (e.g. 'white', 'Japanese')..."
              className="w-full max-w-xl rounded-lg border border-gray-300 px-4 py-2 text-sm"
            />
            <button
              onClick={resetFilters}
              className="ml-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              aria-label="Reset filters"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Category chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => {
            const active = activeCategories.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`rounded-full px-3 py-1 text-sm transition ${
                  active
                    ? "bg-primary text-white ring-2 ring-primary/50"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results summary */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{filtered.length}</span> result
            {filtered.length !== 1 ? "s" : ""}{" "}
            {activeCategories.size > 0 && (
              <>
                for categories:{" "}
                <span className="font-medium">
                  {Array.from(activeCategories).join(", ")}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Results grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <article
                key={item.slug ?? item.name}
                className="rounded-lg border border-gray-200 p-5 shadow-sm transition hover:shadow-lg"
              >
                <header className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-primary">
                    {item.name}
                  </h3>
                </header>

                <p className="mt-3 text-sm text-gray-700">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>

              </article>
            ))
          ) : (
            <p className="text-gray-500">No names match your filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, ArrowLeft, Layers, Columns, List, FileText, GripVertical, ArrowUp, ArrowDown } from "lucide-react";

interface BlockItem {
  bold_title: string;
  text: string;
}

interface ContentBlock {
  type: "paragraph" | "unordered-list" | "ordered-list";
  text?: string;
  items?: BlockItem[];
}

interface ContentSection {
  section_title: string;
  blocks: ContentBlock[];
}

interface ContentCard {
  card_title: string;
  sections: ContentSection[];
}

interface VacancyFormProps {
  vacancyId?: number;
}

export default function VacancyForm({ vacancyId }: VacancyFormProps) {
  const isEdit = !!vacancyId;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  // Form Fields
  const [form, setForm] = useState({
    title: "",
    slug: "",
    department: "",
    position: "",
    location: "Goa",
    type: "On-site",
    card_description: "",
    meta_title: "",
    meta_description: "",
    keywords: "",
    canonical_url: "",
    status: "published" as "published" | "draft",
  });

  // Dynamic Content Cards
  const [cards, setCards] = useState<ContentCard[]>([
    {
      card_title: "Job Details",
      sections: [
        {
          section_title: "Key Responsibilities",
          blocks: [
            {
              type: "ordered-list",
              items: [{ bold_title: "", text: "" }],
            },
          ],
        },
      ],
    },
  ]);

  // Drag and Drop States
  const [dragType, setDragType] = useState<"card" | "section" | "block" | null>(null);
  const [draggedCardIdx, setDraggedCardIdx] = useState<number | null>(null);
  const [draggedSection, setDraggedSection] = useState<{ cardIdx: number; sectionIdx: number } | null>(null);
  const [draggedBlock, setDraggedBlock] = useState<{ cardIdx: number; sectionIdx: number; blockIdx: number } | null>(null);

  // Helper to slugify strings
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
      .replace(/(^-|-$)+/g, "");  // trim leading/trailing hyphens
  };

  // Load Vacancy for Editing
  useEffect(() => {
    if (isEdit) {
      loadVacancy();
    }
  }, [vacancyId]);

  async function loadVacancy() {
    try {
      const res = await fetch(`/api/admin/carrers/${vacancyId}`);
      const result = await res.json();
      if (result.success && result.data) {
        const vacancy = result.data;
        setForm({
          title: vacancy.title,
          slug: vacancy.slug || "",
          department: vacancy.department,
          position: vacancy.position,
          location: vacancy.location,
          type: vacancy.type,
          card_description: vacancy.card_description || "",
          meta_title: vacancy.meta_title || "",
          meta_description: vacancy.meta_description || "",
          keywords: vacancy.keywords || "",
          canonical_url: vacancy.canonical_url || "",
          status: vacancy.status || "published",
        });

        // Parse content
        let parsedContent = vacancy.content;
        if (typeof parsedContent === "string") {
          parsedContent = JSON.parse(parsedContent);
        }
        if (Array.isArray(parsedContent)) {
          setCards(parsedContent);
        }
      } else {
        alert("Failed to load vacancy data");
        router.push("/admin/carrers");
      }
    } catch (err) {
      console.log("Error fetching vacancy:", err);
    } finally {
      setFetching(false);
    }
  }

  // Card Modifications
  const addCard = () => {
    setCards([
      ...cards,
      {
        card_title: "",
        sections: [
          {
            section_title: "",
            blocks: [{ type: "paragraph", text: "" }],
          },
        ],
      },
    ]);
  };

  const removeCard = (cardIdx: number) => {
    if (cards.length === 1) {
      alert("At least one card is required.");
      return;
    }
    if (confirm("Are you sure you want to remove this entire card?")) {
      setCards(cards.filter((_, idx) => idx !== cardIdx));
    }
  };

  const updateCardTitle = (cardIdx: number, val: string) => {
    const updated = [...cards];
    updated[cardIdx].card_title = val;
    setCards(updated);
  };

  // Card Reordering
  const moveCard = (idx: number, direction: "up" | "down") => {
    const nextIdx = direction === "up" ? idx - 1 : idx + 1;
    if (nextIdx < 0 || nextIdx >= cards.length) return;
    const updated = [...cards];
    const temp = updated[idx];
    updated[idx] = updated[nextIdx];
    updated[nextIdx] = temp;
    setCards(updated);
  };

  // Section Modifications
  const addSection = (cardIdx: number) => {
    const updated = [...cards];
    updated[cardIdx].sections.push({
      section_title: "",
      blocks: [{ type: "paragraph", text: "" }],
    });
    setCards(updated);
  };

  const removeSection = (cardIdx: number, sectionIdx: number) => {
    if (cards[cardIdx].sections.length === 1) {
      alert("At least one section is required inside a card.");
      return;
    }
    if (confirm("Are you sure you want to remove this section?")) {
      const updated = [...cards];
      updated[cardIdx].sections = updated[cardIdx].sections.filter((_, idx) => idx !== sectionIdx);
      setCards(updated);
    }
  };

  const updateSectionTitle = (cardIdx: number, sectionIdx: number, val: string) => {
    const updated = [...cards];
    updated[cardIdx].sections[sectionIdx].section_title = val;
    setCards(updated);
  };

  // Section Reordering
  const moveSection = (cardIdx: number, idx: number, direction: "up" | "down") => {
    const nextIdx = direction === "up" ? idx - 1 : idx + 1;
    const sections = cards[cardIdx].sections;
    if (nextIdx < 0 || nextIdx >= sections.length) return;
    const updated = [...cards];
    const temp = sections[idx];
    sections[idx] = sections[nextIdx];
    sections[nextIdx] = temp;
    setCards(updated);
  };

  // Block Modifications
  const addBlock = (cardIdx: number, sectionIdx: number) => {
    const updated = [...cards];
    updated[cardIdx].sections[sectionIdx].blocks.push({
      type: "paragraph",
      text: "",
    });
    setCards(updated);
  };

  const removeBlock = (cardIdx: number, sectionIdx: number, blockIdx: number) => {
    if (cards[cardIdx].sections[sectionIdx].blocks.length === 1) {
      alert("At least one content block is required inside a section.");
      return;
    }
    const updated = [...cards];
    updated[cardIdx].sections[sectionIdx].blocks = updated[cardIdx].sections[sectionIdx].blocks.filter(
      (_, idx) => idx !== blockIdx
    );
    setCards(updated);
  };

  const updateBlockType = (
    cardIdx: number,
    sectionIdx: number,
    blockIdx: number,
    type: "paragraph" | "unordered-list" | "ordered-list"
  ) => {
    const updated = [...cards];
    const block = updated[cardIdx].sections[sectionIdx].blocks[blockIdx];
    block.type = type;
    if (type === "paragraph") {
      block.text = "";
      delete block.items;
    } else {
      block.items = [{ bold_title: "", text: "" }];
      delete block.text;
    }
    setCards(updated);
  };

  const updateBlockText = (cardIdx: number, sectionIdx: number, blockIdx: number, val: string) => {
    const updated = [...cards];
    updated[cardIdx].sections[sectionIdx].blocks[blockIdx].text = val;
    setCards(updated);
  };

  // Block Reordering
  const moveBlock = (cardIdx: number, sectionIdx: number, idx: number, direction: "up" | "down") => {
    const nextIdx = direction === "up" ? idx - 1 : idx + 1;
    const blocks = cards[cardIdx].sections[sectionIdx].blocks;
    if (nextIdx < 0 || nextIdx >= blocks.length) return;
    const updated = [...cards];
    const temp = blocks[idx];
    blocks[idx] = blocks[nextIdx];
    blocks[nextIdx] = temp;
    setCards(updated);
  };

  // List Item Modifications
  const addListItem = (cardIdx: number, sectionIdx: number, blockIdx: number) => {
    const updated = [...cards];
    const block = updated[cardIdx].sections[sectionIdx].blocks[blockIdx];
    if (!block.items) block.items = [];
    block.items.push({ bold_title: "", text: "" });
    setCards(updated);
  };

  const removeListItem = (cardIdx: number, sectionIdx: number, blockIdx: number, itemIdx: number) => {
    const updated = [...cards];
    const block = updated[cardIdx].sections[sectionIdx].blocks[blockIdx];
    if (block.items && block.items.length === 1) {
      alert("At least one list item is required.");
      return;
    }
    if (block.items) {
      block.items = block.items.filter((_, idx) => idx !== itemIdx);
    }
    setCards(updated);
  };

  const updateListItemField = (
    cardIdx: number,
    sectionIdx: number,
    blockIdx: number,
    itemIdx: number,
    field: "bold_title" | "text",
    val: string
  ) => {
    const updated = [...cards];
    const block = updated[cardIdx].sections[sectionIdx].blocks[blockIdx];
    if (block.items && block.items[itemIdx]) {
      block.items[itemIdx][field] = val;
    }
    setCards(updated);
  };

  // List Item Reordering
  const moveListItem = (cardIdx: number, sectionIdx: number, blockIdx: number, idx: number, direction: "up" | "down") => {
    const nextIdx = direction === "up" ? idx - 1 : idx + 1;
    const items = cards[cardIdx].sections[sectionIdx].blocks[blockIdx].items;
    if (!items || nextIdx < 0 || nextIdx >= items.length) return;
    const updated = [...cards];
    const temp = items[idx];
    items[idx] = items[nextIdx];
    items[nextIdx] = temp;
    setCards(updated);
  };

  // Submit Handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      content: cards,
    };

    try {
      const url = isEdit ? `/api/admin/carrers/${vacancyId}` : "/api/admin/carrers";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        router.push("/admin/carrers");
      } else {
        alert(result.message || "An error occurred");
      }
    } catch (err: any) {
      alert(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center p-20 text-gray-500 gap-2">
        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        Fetching job posting details...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-light-white p-6">
      {/* Page Title & Back */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {isEdit ? "Edit Vacancy Posting" : "Add New Vacancy Posting"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEdit ? "Update vacancy posting details and sections" : "Create a new dynamic vacancy posting"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.push("/admin/carrers")}
          className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition w-fit shadow-sm"
        >
          <ArrowLeft size={16} />
          Back to Listings
        </button>
      </div>

      {/* Grid: Primary details and Status settings */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left column: Core Vacancy Info */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5 hover:border-gray-300 transition duration-150">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Basic Vacancy Details</h2>
            
            {/* Title */}
            <div>
              <label className="form-label font-semibold text-gray-700">Job Title</label>
              <input
                type="text"
                required
                placeholder="e.g., Senior Software Developer"
                value={form.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setForm((prev) => ({
                    ...prev,
                    title,
                    slug: isEdit ? prev.slug : slugify(title)
                  }));
                }}
                className="mt-2 w-full form-control rounded-lg px-4 py-3"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="form-label font-semibold text-gray-700">URL Slug</label>
              <input
                type="text"
                required
                placeholder="e.g., senior-software-developer"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })}
                className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-gray-50 focus:bg-white"
              />
              <p className="text-xs text-slate-500 mt-2">
                Used in the page URL (e.g., /career/senior-software-developer). Lowercase letters, numbers, and hyphens are allowed. Backend checks for duplicate slugs and appends suffixes automatically.
              </p>
            </div>

            {/* Department & Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label font-semibold text-gray-700">Department</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Academics"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  className="mt-2 w-full form-control rounded-lg px-4 py-3"
                />
              </div>
              <div>
                <label className="form-label font-semibold text-gray-700">Position / Category</label>
                <select
                  required
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-white"
                >
                  <option value="" disabled>Select Position / Category</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Non Teaching">Non Teaching</option>
                  <option value="Leadership">Leadership</option>
                </select>
              </div>
            </div>

            {/* Location & Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label font-semibold text-gray-700">Location</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Goa"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="mt-2 w-full form-control rounded-lg px-4 py-3"
                />
              </div>
              <div>
                <label className="form-label font-semibold text-gray-700">Work Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-white"
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            {/* Brief Description for Cards */}
            <div>
              <label className="form-label font-semibold text-gray-700">Card Description (Short Summary)</label>
              <textarea
                rows={3}
                placeholder="A short summary of the vacancy displayed on the jobs listing page..."
                value={form.card_description}
                onChange={(e) => setForm({ ...form, card_description: e.target.value })}
                className="mt-2 w-full form-control rounded-lg px-4 py-3 resize-y"
              />
            </div>
          </div>
        </div>

        {/* Right column: Status & Settings */}
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5 hover:border-gray-300 transition duration-150">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Publishing Status</h2>
            
            {/* Status Select */}
            <div>
              <label className="form-label font-semibold text-gray-700">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as "published" | "draft" })}
                className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-white"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Draft vacancies will not be visible on the public careers list.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : isEdit ? (
                "Update Job Posting"
              ) : (
                "Create Job Posting"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Content Builder Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between bg-slate-900 text-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Layers className="text-blue-400" size={22} />
            <h2 className="text-lg font-bold">Details Content Cards</h2>
          </div>
          <button
            type="button"
            onClick={addCard}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3.5 py-2 rounded-lg font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus size={14} />
            Add Details Card
          </button>
        </div>

        {cards.map((card, cardIdx) => (
          <div
            key={cardIdx}
            draggable={dragType === "card"}
            onDragStart={(e) => {
              setDraggedCardIdx(cardIdx);
              e.dataTransfer.effectAllowed = "move";
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              if (draggedCardIdx !== null && draggedCardIdx !== cardIdx) {
                const updated = [...cards];
                const [draggedItem] = updated.splice(draggedCardIdx, 1);
                updated.splice(cardIdx, 0, draggedItem);
                setCards(updated);
              }
              setDraggedCardIdx(null);
            }}
            className={`bg-white rounded-2xl border-2 p-6 shadow-sm space-y-6 relative transition duration-150 ${
              draggedCardIdx === cardIdx
                ? "border-blue-400 opacity-60 bg-blue-50/20 scale-[0.99]"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            {/* Action Bar: Drag Handle, Reordering Arrows & Delete Card Button */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10 bg-white pl-2">
              {/* Card Drag Handle */}
              <div
                onMouseDown={() => setDragType("card")}
                onMouseUp={() => setDragType(null)}
                className="cursor-grab active:cursor-grabbing p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition"
                title="Drag to Reorder Card"
              >
                <GripVertical size={16} />
              </div>

              {/* Reordering Arrows */}
              <button
                type="button"
                disabled={cardIdx === 0}
                onClick={() => moveCard(cardIdx, "up")}
                className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Move Card Up"
              >
                <ArrowUp size={15} />
              </button>
              <button
                type="button"
                disabled={cardIdx === cards.length - 1}
                onClick={() => moveCard(cardIdx, "down")}
                className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Move Card Down"
              >
                <ArrowDown size={15} />
              </button>

              {/* Delete button */}
              <button
                type="button"
                onClick={() => removeCard(cardIdx)}
                className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition ml-1"
                title="Remove Entire Card"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Card Header Title Input */}
            <div className="max-w-md">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <Columns size={16} className="text-slate-500" />
                Card Display Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Job Details, Application Deadline"
                value={card.card_title}
                onChange={(e) => updateCardTitle(cardIdx, e.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm font-semibold"
              />
            </div>

            {/* Sections in this Card */}
            <div className="space-y-6 pl-4 border-l-2 border-slate-100">
              <div className="flex items-center justify-between pb-2 border-b">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Sections</h3>
                <button
                  type="button"
                  onClick={() => addSection(cardIdx)}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition cursor-pointer"
                >
                  <Plus size={12} />
                  Add Section
                </button>
              </div>

              {card.sections.map((section, sectionIdx) => (
                <div
                  key={sectionIdx}
                  draggable={dragType === "section"}
                  onDragStart={(e) => {
                    e.stopPropagation();
                    setDraggedSection({ cardIdx, sectionIdx });
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.stopPropagation();
                    if (draggedSection && draggedSection.cardIdx === cardIdx && draggedSection.sectionIdx !== sectionIdx) {
                      const updated = [...cards];
                      const sections = updated[cardIdx].sections;
                      const [draggedItem] = sections.splice(draggedSection.sectionIdx, 1);
                      sections.splice(sectionIdx, 0, draggedItem);
                      setCards(updated);
                    }
                    setDraggedSection(null);
                  }}
                  className={`rounded-xl border p-5 space-y-5 relative transition duration-150 ${
                    draggedSection?.cardIdx === cardIdx && draggedSection?.sectionIdx === sectionIdx
                      ? "border-blue-300 bg-slate-100/50 opacity-70"
                      : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                  }`}
                >
                  {/* Action Bar for Section */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 z-10 bg-transparent pr-1">
                    {/* Section Drag handle */}
                    <div
                      onMouseDown={() => setDragType("section")}
                      onMouseUp={() => setDragType(null)}
                      className="cursor-grab active:cursor-grabbing p-1 hover:bg-slate-200/80 rounded text-slate-400 hover:text-slate-600 transition"
                      title="Drag to Reorder Section"
                    >
                      <GripVertical size={14} />
                    </div>

                    {/* Reorder Arrows */}
                    <button
                      type="button"
                      disabled={sectionIdx === 0}
                      onClick={() => moveSection(cardIdx, sectionIdx, "up")}
                      className="p-1 hover:bg-slate-200/80 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30"
                      title="Move Section Up"
                    >
                      <ArrowUp size={13} />
                    </button>
                    <button
                      type="button"
                      disabled={sectionIdx === card.sections.length - 1}
                      onClick={() => moveSection(cardIdx, sectionIdx, "down")}
                      className="p-1 hover:bg-slate-200/80 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30"
                      title="Move Section Down"
                    >
                      <ArrowDown size={13} />
                    </button>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => removeSection(cardIdx, sectionIdx)}
                      className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition ml-1"
                      title="Remove Section"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  {/* Section Title Input */}
                  <div className="max-w-xs">
                    <label className="text-xs font-bold text-slate-700">Section Title (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Key Responsibilities"
                      value={section.section_title}
                      onChange={(e) => updateSectionTitle(cardIdx, sectionIdx, e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>

                  {/* Blocks in this Section */}
                  <div className="space-y-4 pl-4 border-l border-slate-300">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Content Blocks</h4>
                      <button
                        type="button"
                        onClick={() => addBlock(cardIdx, sectionIdx)}
                        className="text-[11px] bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded font-bold flex items-center gap-1 transition cursor-pointer"
                      >
                        <Plus size={10} />
                        Add Content Block
                      </button>
                    </div>

                    {section.blocks.map((block, blockIdx) => (
                      <div
                        key={blockIdx}
                        draggable={dragType === "block"}
                        onDragStart={(e) => {
                          e.stopPropagation();
                          setDraggedBlock({ cardIdx, sectionIdx, blockIdx });
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.stopPropagation();
                          if (
                            draggedBlock &&
                            draggedBlock.cardIdx === cardIdx &&
                            draggedBlock.sectionIdx === sectionIdx &&
                            draggedBlock.blockIdx !== blockIdx
                          ) {
                            const updated = [...cards];
                            const blocks = updated[cardIdx].sections[sectionIdx].blocks;
                            const [draggedItem] = blocks.splice(draggedBlock.blockIdx, 1);
                            blocks.splice(blockIdx, 0, draggedItem);
                            setCards(updated);
                          }
                          setDraggedBlock(null);
                        }}
                        className={`rounded-lg border p-4 space-y-4 relative transition duration-150 ${
                          draggedBlock?.cardIdx === cardIdx &&
                          draggedBlock?.sectionIdx === sectionIdx &&
                          draggedBlock?.blockIdx === blockIdx
                            ? "border-blue-200 bg-slate-50 opacity-70"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        {/* Action Bar for Block */}
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-0.5 z-10 bg-white pl-1">
                          {/* Block Drag handle */}
                          <div
                            onMouseDown={() => setDragType("block")}
                            onMouseUp={() => setDragType(null)}
                            className="cursor-grab active:cursor-grabbing p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition"
                            title="Drag to Reorder Block"
                          >
                            <GripVertical size={13} />
                          </div>

                          {/* Reordering Arrows */}
                          <button
                            type="button"
                            disabled={blockIdx === 0}
                            onClick={() => moveBlock(cardIdx, sectionIdx, blockIdx, "up")}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30"
                            title="Move Block Up"
                          >
                            <ArrowUp size={12} />
                          </button>
                          <button
                            type="button"
                            disabled={blockIdx === section.blocks.length - 1}
                            onClick={() => moveBlock(cardIdx, sectionIdx, blockIdx, "down")}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-700 disabled:opacity-30"
                            title="Move Block Down"
                          >
                            <ArrowDown size={12} />
                          </button>

                          {/* Delete button */}
                          <button
                            type="button"
                            onClick={() => removeBlock(cardIdx, sectionIdx, blockIdx)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition ml-1"
                            title="Remove Content Block"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {/* Block Type Selection */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <div>
                            <label className="text-[11px] font-bold text-slate-500 block">Block Type</label>
                            <select
                              value={block.type}
                              onChange={(e) =>
                                updateBlockType(
                                  cardIdx,
                                  sectionIdx,
                                  blockIdx,
                                  e.target.value as "paragraph" | "unordered-list" | "ordered-list"
                                )
                              }
                              className="mt-1 rounded border border-gray-300 px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-white font-semibold cursor-pointer"
                            >
                              <option value="paragraph">Paragraph</option>
                              <option value="unordered-list">Unordered Bullet List</option>
                              <option value="ordered-list">Ordered Numbered List</option>
                            </select>
                          </div>
                        </div>

                        {/* Block Inputs: Paragraph vs Lists */}
                        {block.type === "paragraph" ? (
                          <div>
                            <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                              <FileText size={12} />
                              Paragraph Content
                            </label>
                            <textarea
                              required
                              rows={3}
                              placeholder="Enter details text..."
                              value={block.text || ""}
                              onChange={(e) => updateBlockText(cardIdx, sectionIdx, blockIdx, e.target.value)}
                              className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 outline-none resize-y"
                            />
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b pb-1">
                              <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                                <List size={12} />
                                List Items
                              </label>
                              <button
                                type="button"
                                onClick={() => addListItem(cardIdx, sectionIdx, blockIdx)}
                                className="text-[10px] text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
                              >
                                + Add List Item
                              </button>
                            </div>

                            {block.items?.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex items-start gap-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100 hover:border-slate-200 transition"
                              >
                                <span className="text-xs font-bold text-slate-400 mt-2.5">
                                  {block.type === "ordered-list" ? `${itemIdx + 1}.` : "•"}
                                </span>
                                
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-2">
                                  {/* Bold Header prefix */}
                                  <div className="sm:col-span-1">
                                    <input
                                      type="text"
                                      placeholder="Bold Header prefix"
                                      value={item.bold_title}
                                      onChange={(e) =>
                                        updateListItemField(
                                          cardIdx,
                                          sectionIdx,
                                          blockIdx,
                                          itemIdx,
                                          "bold_title",
                                          e.target.value
                                        )
                                      }
                                      className="w-full rounded border border-gray-300 px-2 py-1.5 text-xs outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                  </div>
                                  
                                  {/* Main list text content */}
                                  <div className="sm:col-span-3">
                                    <textarea
                                      required
                                      rows={1}
                                      placeholder="List item details text..."
                                      value={item.text}
                                      onChange={(e) =>
                                        updateListItemField(
                                          cardIdx,
                                          sectionIdx,
                                          blockIdx,
                                          itemIdx,
                                          "text",
                                          e.target.value
                                        )
                                      }
                                      className="w-full rounded border border-gray-300 px-2 py-1.5 text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                                    />
                                  </div>
                                </div>

                                {/* Reorder List Items */}
                                <div className="flex flex-col gap-0.5 mt-0.5">
                                  <button
                                    type="button"
                                    disabled={itemIdx === 0}
                                    onClick={() => moveListItem(cardIdx, sectionIdx, blockIdx, itemIdx, "up")}
                                    className="text-slate-400 hover:text-slate-600 disabled:opacity-20"
                                    title="Move Item Up"
                                  >
                                    <ArrowUp size={11} />
                                  </button>
                                  <button
                                    type="button"
                                    disabled={itemIdx === (block.items?.length || 0) - 1}
                                    onClick={() => moveListItem(cardIdx, sectionIdx, blockIdx, itemIdx, "down")}
                                    className="text-slate-400 hover:text-slate-600 disabled:opacity-20"
                                    title="Move Item Down"
                                  >
                                    <ArrowDown size={11} />
                                  </button>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => removeListItem(cardIdx, sectionIdx, blockIdx, itemIdx)}
                                  className="text-red-500 hover:text-red-700 p-1 mt-1"
                                  title="Remove item"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full-width SEO Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5 mt-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">SEO</h2>
        
        {/* Meta Title */}
        <div>
          <label className="form-label font-semibold text-gray-700">Meta Title</label>
          <input
            type="text"
            placeholder="Meta Title"
            value={form.meta_title}
            onChange={(e) => setForm({ ...form, meta_title: e.target.value })}
            className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="form-label font-semibold text-gray-700">Meta Description</label>
          <textarea
            rows={3}
            placeholder="Meta Description"
            value={form.meta_description}
            onChange={(e) => setForm({ ...form, meta_description: e.target.value })}
            className="mt-2 w-full form-control rounded-lg px-4 py-3 resize-y bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Keywords */}
        <div>
          <label className="form-label font-semibold text-gray-700">Keywords (comma separated)</label>
          <textarea
            rows={2}
            placeholder="Keywords (comma separated)"
            value={form.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
            className="mt-2 w-full form-control rounded-lg px-4 py-3 resize-y bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Canonical URL */}
        <div>
          <label className="form-label font-semibold text-gray-700">Canonical URL</label>
          <input
            type="text"
            placeholder="Canonical URL"
            value={form.canonical_url}
            onChange={(e) => setForm({ ...form, canonical_url: e.target.value })}
            className="mt-2 w-full form-control rounded-lg px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Form Bottom Save */}
      <div className="flex gap-4 justify-end bg-white rounded-xl p-5 border border-gray-100 shadow-sm mt-6">
        <button
          type="button"
          onClick={() => router.push("/admin/carrers")}
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition shadow-sm cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition disabled:opacity-50 flex items-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </>
          ) : isEdit ? (
            "Save Changes"
          ) : (
            "Publish Job Posting"
          )}
        </button>
      </div>
    </form>
  );
}

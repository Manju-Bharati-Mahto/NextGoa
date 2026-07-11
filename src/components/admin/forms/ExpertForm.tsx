"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ExpertFormProps {
  expertId?: number;
}

export default function ExpertForm({ expertId }: ExpertFormProps) {
  const router = useRouter();

  const isEdit = !!expertId;

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [openSocial, setOpenSocial] = useState(0);

  const defaultCategories = [
    { label: "Leadership", value: "Leadership" },
    { label: "Leadership Team", value: "Leadership Team" },
    { label: "Faculty Deans", value: "Faculty Deans" },
    { label: "Staff", value: "Staff" },
  ];

  const [categories, setCategories] = useState(defaultCategories);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [form, setForm] = useState({
    category: "Leadership",

    name: "",

    designation: "",

    department: "",
    
    experience:"",
    
    research_area:"",

    tagline: "",

    tagline2: "",

    description: "",

    image: "",

    social_links: [] as any[],

    status: 1,

    sort_order: 0,
  });

  function update(field: string, value: any) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  function toggleCategory(category: string) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  function addSocialLink() {
    update("social_links", [
      ...form.social_links,
      {
        platform: "linkedin",
        url: "",
      },
    ]);

    setOpenSocial(form.social_links.length);
  }

  function updateSocialLink(index: number, field: string, value: string) {
    const updated = [...form.social_links];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("social_links", updated);
  }

  function removeSocialLink(index: number) {
    update(
      "social_links",
      form.social_links.filter((_: any, i: number) => i !== index),
    );
  }

  async function loadExpert() {
    try {
      const res = await fetch(`/api/admin/experts/${expertId}`);

      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      setForm({
        category: result.data.category,
        name: result.data.name,
        designation: result.data.designation,
        department: result.data.department,
        experience: result.data.experience,
        research_area: result.data.research_area,
        tagline: result.data.tagline,
        tagline2: result.data.tagline2,
        description: result.data.description,
        image: result.data.image,
        social_links: result.data.social_links || [],
        status: result.data.status,
        sort_order: result.data.sort_order,
      });

      let categories: string[] = [];

      try {
        categories = JSON.parse(result.data.category);
      } catch {
        categories = result.data.category ? [result.data.category] : [];
      }

      setSelectedCategories(categories);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load expert.");
    }
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("category", JSON.stringify(selectedCategories));
      formData.append("name", form.name);
      formData.append("designation", form.designation);
      formData.append("department", form.department);
      formData.append("experience", form.experience);
      formData.append("research_area", form.research_area);
      formData.append("tagline", form.tagline);
      formData.append("tagline2", form.tagline2);
      formData.append("description", form.description);
      formData.append("social_links", JSON.stringify(form.social_links));
      formData.append("status", String(form.status));
      formData.append("sort_order", String(form.sort_order));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(
        isEdit ? `/api/admin/experts/${expertId}` : "/api/admin/experts/create",
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
        },
      );

      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(
        isEdit
          ? "Expert updated successfully."
          : "Expert created successfully.",
      );

      router.push("/admin/experts");
    } catch {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  }
  useEffect(() => {
    if (expertId) {
      loadExpert();
    }
  }, [expertId]);
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-light-white rounded-xl shadow p-8"
    >
      {/* Page Header */}

      <div className="page-titles">
        <h1 className="text-3xl font-bold">
          {isEdit ? "Edit Expert" : "Create Expert"}
        </h1>

        <p className="text-gray-500 mt-2">
          Manage Leadership / Founder / Dean details.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT */}

        <div className="xl:col-span-8 space-y-6">
          {/* Basic Information */}

          <div className="cards-admin-text p-8">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

            <div className="space-y-5">
              <div>
                <label className="form-label">Name</label>

                <input
                  className="form-control"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Designation</label>

                <input
                  className="form-control"
                  value={form.designation}
                  onChange={(e) => update("designation", e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Department</label>

                <input
                  className="form-control"
                  value={form.department}
                  onChange={(e) => update("department", e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Experience</label>

                <input
                  className="form-control"
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Research Area</label>

                <input
                  className="form-control"
                  value={form.research_area}
                  onChange={(e) => update("research_area", e.target.value)}
                />
              </div>

              

              <div>
                <label className="form-label">Tagline</label>

                <input
                  className="form-control"
                  value={form.tagline}
                  onChange={(e) => update("tagline", e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Tagline 2</label>

                <input
                  className="form-control"
                  value={form.tagline2}
                  onChange={(e) => update("tagline2", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Description */}

          <div className="cards-admin-text p-8">
            <h2 className="text-2xl font-bold mb-6">Description</h2>

            <textarea
              rows={8}
              className="form-textarea"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
            />
          </div>

          {/* Social Links */}

          <div className="cards-admin-text p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Social Links</h2>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={addSocialLink}
              >
                <Plus size={16} />
                Add Link
              </button>
            </div>

            <div className="space-y-4 mt-6">
              {form.social_links.map((item: any, index: number) => {
                const open = openSocial === index;

                return (
                  <div
                    key={index}
                    className="border-light-all rounded-xl overflow-hidden"
                  >
                    {/* Header */}

                    <div className="flex w-full items-center justify-between bg-gray-50 px-5 py-4">
                      <div
                        onClick={() => setOpenSocial(open ? -1 : index)}
                        className="flex w-full cursor-pointer items-center justify-between bg-gray-50"
                      >
                        <div className="flex-1 font-semibold">
                          Social Link {index + 1}
                        </div>

                        <div className="mr-3">
                          {open ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSocialLink(index);
                          }}
                          className="text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    {/* Body */}

                    {open && (
                      <div className="p-5 space-y-5">
                        <div>
                          <label className="form-label">Platform</label>

                          <select
                            className="form-select"
                            value={item.platform}
                            onChange={(e) =>
                              updateSocialLink(
                                index,
                                "platform",
                                e.target.value,
                              )
                            }
                          >
                            <option value="linkedin">LinkedIn</option>

                            <option value="instagram">Instagram</option>

                            <option value="facebook">Facebook</option>

                            <option value="youtube">YouTube</option>

                            <option value="x">X (Twitter)</option>

                            <option value="orcid">ORCID</option>

                            <option value="website">Website</option>
                          </select>
                        </div>

                        <div>
                          <label className="form-label">URL</label>

                          <input
                            className="form-control"
                            value={item.url || ""}
                            onChange={(e) =>
                              updateSocialLink(index, "url", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="xl:col-span-4 space-y-6">
          {/* Category */}

          <div className="cards-admin-text">
            <div className="border-light px-5 py-4">
              <h3 className="font-semibold">Categories</h3>
            </div>

            <div className="p-5 space-y-3">
              {categories.map((category) => (
                <label key={category.value} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedCategories.includes(category.value)}
                    onChange={() => toggleCategory(category.value)}
                  />

                  <span>{category.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Image */}

          <div className="cards-admin-text p-8">
            <h2 className="text-xl font-bold mb-5">Profile Image</h2>

            <input
              type="file"
              accept="image/*"
              className="form-control img-input"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                setImageFile(file);

                update("image", URL.createObjectURL(file));
              }}
            />

            {form.image && (
              <img src={form.image} className="mt-5 rounded-xl border w-full" />
            )}
          </div>

          {/* Settings */}

          <div className="cards-admin-text p-8">
            <h2 className="text-xl font-bold mb-5">Settings</h2>

            <div className="space-y-5">
              <div>
                <label className="form-label">Sort Order</label>

                <input
                  type="number"
                  className="form-control"
                  value={form.sort_order}
                  onChange={(e) => update("sort_order", Number(e.target.value))}
                />
              </div>

              <div>
                <label className="form-label">Status</label>

                <select
                  className="form-select"
                  value={form.status}
                  onChange={(e) => update("status", Number(e.target.value))}
                >
                  <option value={1}>Active</option>

                  <option value={0}>Inactive</option>
                </select>
              </div>
              {/* Publish */}

              <div className="">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full"
                >
                  {loading
                    ? "Saving..."
                    : isEdit
                      ? "Update Expert"
                      : "Create Expert"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

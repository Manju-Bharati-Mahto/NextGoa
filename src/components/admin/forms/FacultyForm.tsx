"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SectionBuilder from "@/components/admin/builder/SectionBuilder";
import { ChevronRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface FacultyFormProps {
  facultyId?: number;
}

export default function FacultyForm({ facultyId }: FacultyFormProps) {
  const router = useRouter();

  const isEdit = !!facultyId;

  const [loading, setLoading] = useState(false);

  const [showStatus, setShowStatus] = useState(false);

  const [showDate, setShowDate] = useState(false);

  const [publishDate, setPublishDate] = useState("");

  const [sections, setSections] = useState<any[]>([]);

  const [showSEO, setShowSEO] = useState(false);

  const [showPublish, setShowPublish] = useState(true);

  const [showFeatured, setShowFeatured] = useState(false);

  const [showOG, setShowOG] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [ogImageFile, setOgImageFile] = useState<File | null>(null);

  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    if (isEdit) {
      async function loadFaculty() {
        try {
          const res = await fetch(`/api/admin/faculty/${facultyId}`);

          const data = await res.json();

          if (!data.faculty) return;

          setForm({
            title: data.faculty.title || "",

            slug: data.faculty.slug || "",

            seo_title: data.faculty.seo_title || "",

            seo_description: data.faculty.seo_description || "",

            seo_keywords: data.faculty.seo_keywords || "",

            canonical_url: data.faculty.canonical_url || "",

            og_title: data.faculty.og_title || "",

            og_description: data.faculty.og_description || "",

            featured_image: data.faculty.featured_image || "",

            og_image: data.faculty.og_image || "",

            status: data.faculty.status || "draft",
          });

          setSections(
            (data.sections || []).map((item: any) => ({
              id: String(item.id),
              type: item.type,
              title: item.title,
              status: item.status,
              content: item.content || {},
            })),
          );

          if (data.faculty.publish_at) {
            setPublishDate(data.faculty.publish_at.slice(0, 16));
          }
        } catch (err) {
          console.log(err);
        }
      }
      loadFaculty();
    } else {
      setPublishDate(new Date().toISOString().slice(0, 16));
    }
  }, []);

  const [form, setForm] = useState({
    title: "",

    slug: "",

    seo_title: "",

    seo_description: "",

    seo_keywords: "",

    canonical_url: "",

    og_title: "",

    og_description: "",

    featured_image: "",

    og_image: "",

    status: "draft",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (isEdit) return;

    setForm((prev) => ({
      ...prev,

      slug: prev.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    }));
  }, [form.title]);

  async function saveFaculty(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", form.title);

      formData.append("slug", form.slug);

      formData.append("seo_title", form.seo_title);

      formData.append("seo_description", form.seo_description);

      formData.append("seo_keywords", form.seo_keywords);

      formData.append("canonical_url", form.canonical_url);

      formData.append("og_title", form.og_title);

      formData.append("og_description", form.og_description);
      if (imageFile) {
        formData.append("featured_image", imageFile);
      }

      if (ogImageFile) {
        formData.append("og_image", ogImageFile);
      }

      formData.append("status", form.status);

      formData.append("publish_at", publishDate);

      const sectionsData = sections.map((section) => {
        const content = { ...section.content };

        delete content.backgroundImage;

        delete content.backgroundImageFile;

        return {
          ...section,
          content,
        };
      });

      formData.append("sections", JSON.stringify(sectionsData));

      sections.forEach((section, index) => {
        if (
          section.type === "final_cta" &&
          section.content.backgroundImage instanceof File
        ) {
          formData.append(
            `final_cta_background_${index}`,
            section.content.backgroundImage,
          );
        }
      });

      sections.forEach((section, index) => {
        if (
          section.type === "banner" &&
          section.content.backgroundImage instanceof File
        ) {
          formData.append(
            `banner_background_${index}`,
            section.content.backgroundImage,
          );
        }
      });

      const url = isEdit
        ? `/api/admin/faculty/${facultyId}`
        : "/api/admin/faculty";

      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(
        url,

        {
          method,

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
          ? "Faculty updated successfully."
          : "Faculty created successfully.",
      );

      // router.push("/admin/faculty");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={saveFaculty}
      className="space-y-6 bg-light-white rounded-xl shadow p-8"
    >
      <div className="grid xl:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-8 space-y-6">
          {/* Faculty Details */}
          <div className="cards-admin-text p-5">
            <div className="cards-admin-header">
              <h2 className="text-2xl font-bold mb-6">Faculty Details</h2>
            </div>
            <div className="space-y-5">
              <div className="mb-4">
                <label className="form-label"> Faculty Title </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter faculty title"
                />
              </div>
              <div>
                <label className="form-label">Slug</label>

                <div className="flex items-center rounded-xl border border-gray-300 overflow-hidden">
                  <div className="bg-gray-100 px-4 py-3 text-gray-600 font-medium border-r whitespace-nowrap">
                    /faculty/
                  </div>

                  <input
                    type="text"
                    className="flex-1 px-4 py-3 outline-none bg-white"
                    placeholder="engineering"
                    value={form.slug}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        slug: e.target.value,
                      }))
                    }
                  />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Final URL:{" "}
                  <span className="font-medium text-gray-700">
                    /faculty/{form.slug || "your-slug"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="cards-admin-text">
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => setShowSections(!showSections)}
            >
              <h2 className="text-2xl font-bold">Sections</h2>

              {showSections ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>

            {showSections && (
              <div className="border-light-t">
                <SectionBuilder
                  sections={sections}
                  setSections={setSections}
                  module="faculty"
                />
              </div>
            )}
          </div>
          {/* SEO */}
          <div className="cards-admin-text">
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => setShowSEO(!showSEO)}
            >
              <h2 className="text-2xl font-bold">SEO</h2>

              {showSEO ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>
            {showSEO && (
              <div className="space-y-4 p-5 border-light-t">
                <div>
                  <label className="form-label">Meta Title</label>
                  <input
                    name="seo_title"
                    value={form.seo_title}
                    onChange={handleChange}
                    placeholder="Meta Title"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Meta Description</label>
                  <textarea
                    rows={2}
                    name="seo_description"
                    value={form.seo_description}
                    onChange={handleChange}
                    placeholder="Meta Description"
                    className="form-textarea"
                  />
                </div>
                <div>
                  <label className="form-label">
                    Keywords (comma separated)
                  </label>
                  <textarea
                    rows={2}
                    name="seo_keywords"
                    value={form.seo_keywords}
                    onChange={handleChange}
                    placeholder="Keywords (comma separated)"
                    className="form-textarea"
                  />
                </div>
                <div>
                  <label className="form-label">Canonical URL</label>
                  <input
                    type="text"
                    name="canonical_url"
                    value={form.canonical_url}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Open Graph Title</label>
                  <input
                    type="text"
                    name="og_title"
                    value={form.og_title}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="form-label">Open Graph Description</label>
                  <textarea
                    rows={2}
                    name="og_description"
                    value={form.og_description}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* RIGHT */}
        <div className="xl:col-span-4 space-y-6">
          {/* Publish */}
          <div className="cards-admin-text">
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => setShowPublish(!showPublish)}
            >
              <h3 className="font-bold text-1xl">Publish</h3>

              {showPublish ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>

            {showPublish && (
              <div className="border-light-t">
                {/* Status */}
                <div className="flex items-center justify-between border-b border-dotted p-5">
                  <div>
                    <span className="font-medium">Status :</span>
                    <span className="ml-2 capitalize text-gray-600">
                      {form.status}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-blue-600 text-sm"
                    onClick={() => setShowStatus(!showStatus)}
                  >
                    {" "}
                    Edit{" "}
                  </button>
                </div>
                {showStatus && (
                  <div className="p-5 border-b border-dotted">
                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                    <button
                      type="button"
                      className="btn btn-primary mt-3"
                      onClick={() => setShowStatus(false)}
                    >
                      {" "}
                      OK{" "}
                    </button>
                  </div>
                )}
                {/* Publish Date */}
                <div className="flex items-center justify-between border-b border-dotted p-5">
                  <div>
                    <span className="font-medium"> Publish : </span>
                    <span className="ml-2 text-gray-600">
                      {" "}
                      {publishDate
                        ? new Date(publishDate).toLocaleString()
                        : "-"}{" "}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-blue-600 text-sm"
                    onClick={() => setShowDate(!showDate)}
                  >
                    {" "}
                    Edit{" "}
                  </button>
                </div>
                {showDate && (
                  <div className="p-5 border-b border-dotted">
                    <input
                      type="datetime-local"
                      className="form-control"
                      value={publishDate}
                      onChange={(e) => setPublishDate(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-primary mt-3"
                      onClick={() => setShowDate(false)}
                    >
                      {" "}
                      OK{" "}
                    </button>
                  </div>
                )}
                {/* Buttons */}
                <div className="p-5 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full"
                  >
                    {" "}
                    {loading
                      ? "Saving..."
                      : isEdit
                        ? "Update Faculty"
                        : "Publish Faculty"}{" "}
                  </button>
                  <button
                    type="button"
                    className="btn !bg-purple-700 w-full text-white"
                    onClick={() => {
                      sessionStorage.setItem(
                        "faculty-preview",
                        JSON.stringify({
                          form,
                          sections,
                        }),
                      );

                      window.open("/preview", "_blank");
                    }}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger w-full"
                    onClick={() => router.push("/admin/faculty")}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Featured Image */}
          <div className="cards-admin-text">
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => setShowFeatured(!showFeatured)}
            >
              <h3 className="font-bold text-1xl">Featured Image</h3>

              {showFeatured ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>

            {showFeatured && (
              <div className="border-light-t p-5">
                {imageFile ? (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    className="rounded-lg w-full mb-4 border"
                  />
                ) : form.featured_image ? (
                  <img
                    src={form.featured_image}
                    className="rounded-lg w-full mb-4 border"
                  />
                ) : (
                  <div className="border rounded-lg h-44 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="form-control mt-4 img-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setImageFile(file);
                  }}
                />
              </div>
            )}
          </div>
          {/* OG Image */}
          <div className="cards-admin-text">
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => setShowOG(!showOG)}
            >
              <h3 className="font-bold text-1xl">Open Graph Image</h3>

              {showOG ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>

            {showOG && (
              <div className="border-light-t p-5">
                {ogImageFile ? (
                  <img
                    src={URL.createObjectURL(ogImageFile)}
                    className="rounded-lg w-full mb-4 border"
                  />
                ) : form.og_image ? (
                  <img
                    src={form.og_image}
                    className="rounded-lg w-full mb-4 border"
                  />
                ) : (
                  <div className="border rounded-lg h-44 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="form-control mt-4 img-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setOgImageFile(file);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

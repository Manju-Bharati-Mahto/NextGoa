"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";


export default function EditBlogPage() {

  const router = useRouter();

  const params = useParams();

  const id = params.id;

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [featuredImage, setFeaturedImage] = useState("");

  const [ogImageFile, setOgImageFile] = useState<File | null>(null);
  const [currentOgImage, setCurrentOgImage] = useState("");

  const [faqs, setFaqs] = useState([ { question: "", answer: "", }, ]);

  const [pageLoading, setPageLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);
  const [imageError, setImageError] = useState("");
  const [ogImageError, setOgImageError] = useState("");

 const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
    

  const [form, setForm] = useState({
  title: "",
  slug: "",
  excerpt: "",
  category: [] as string[],
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  og_title: "",
  og_description: "",
  status: "draft",
});

  const [sections, setSections] = useState([
  {
    tag: "h2",
    title: "",
    details: "",
  },
]);

  

  useEffect(() => {
    loadCategories();
    loadBlog();

  }, []);

  async function loadBlog() {

    try {

      const res = await fetch(
        `/api/admin/blogs/${id}`
      );

      const data = await res.json();
      setFaqs(
        data.faqs?.length
          ? data.faqs
          : [{ question: "", answer: "" }]
      );

      setFeaturedImage(data.featured_image || "");
      setCurrentOgImage(data.og_image || "");

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        excerpt: data.excerpt || "",
        category: data.categories || [],
        meta_title: data.meta_title || "",
        meta_description: data.meta_description || "",
        meta_keywords: data.meta_keywords || "",
        canonical_url: data.canonical_url || "",
        og_title: data.og_title || "",
        og_description: data.og_description || "",
        status: data.status || "draft",
      });

      setSections(
        data.content
          ? JSON.parse(data.content)
          : [
              {
                tag: "h2",
                title: "",
                details: "",
              },
            ]
      );

    } catch (err) {

      console.log(err);

      alert("Unable to load blog.");

    }

    setPageLoading(false);

  }

  

  function handleChange(

    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >

  ) {

    const { name, value } = e.target;

    setForm(prev => ({

      ...prev,

      [name]: value,

      ...(name === "title"
        ? {

            slug: value

              .toLowerCase()

              .replace(/[^\w\s-]/g, "")

              .replace(/\s+/g, "-")

              .replace(/-+/g, "-"),

          }
        : {}),

    }));

  }

  const addFaq = () => { setFaqs([ ...faqs, { question: "", answer: "", }, ]); };
    const removeFaq = (index: number) => {
      setFaqs(faqs.filter((_, i) => i !== index));
    };
    const updateFaq = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const addSection = () => {
  setSections([
    ...sections,
    {
      tag: "h2",
      title: "",
      details: "",
    },
  ]);
};

const removeSection = (index: number) => {
  setSections(sections.filter((_, i) => i !== index));
};

const updateSection = (
  index: number,
  field: "tag" | "title" | "details",
  value: string
) => {
  const updated = [...sections];
  updated[index][field] = value;
  setSections(updated);
};

  async function updateBlog(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);

  try {
    const formData = new FormData();

   Object.entries(form).forEach(([key, value]) => {

  if (key === "category") {
    formData.append(
      "category",
      JSON.stringify(value)
    );
  } else {
    formData.append(key, value as string);
  }

});

formData.append(
  "sections",
  JSON.stringify(sections)
);

formData.append(
  "faqs",
  JSON.stringify(faqs)
);
    
    formData.append("featured_image_path", featuredImage);
    formData.append("og_image_path", currentOgImage); 
   if (imageFile) {
      formData.append("featured_image", imageFile);
    }

    if (ogImageFile) {
      formData.append("og_image", ogImageFile);
    }

    const res = await fetch(`/api/admin/blogs/${id}`, {
      method: "PUT",
      body: formData,
    });

    const result = await res.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Blog Updated Successfully");

    router.push("/admin/blogs");
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
}
async function loadCategories() {
  try {
    const res = await fetch("/api/admin/blog-categories");
    const data = await res.json();

    setCategories(data);
  } catch (err) {
    console.log(err);
  }
}
  async function deleteBlog() {

    if (
      !confirm(
        "Are you sure you want to delete this blog?"
      )
    )
      return;

    try {

      const res = await fetch(

        `/api/admin/blogs/${id}`,

        {

          method: "DELETE",

        }

      );

      const result =
        await res.json();

      if (!result.success) {

        alert(result.message);

        return;

      }

      alert("Blog Deleted");

      router.push("/admin/blogs");

    } catch (err) {

      console.log(err);

    }

  }

  if (pageLoading) {

    return (

      <div className="p-8">

        Loading...

      </div>

    );

  }

  return (

    <form

      onSubmit={updateBlog}

      className="space-y-6 bg-white rounded-xl shadow p-8"

    >

      <h1 className="text-3xl font-bold">

        Edit Blog

      </h1>
            {/* Title */}

      <div>
        <label className="font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
          required
        />
      </div>

      {/* Slug */}

      <div>
        <label className="font-medium">
          Slug
        </label>

        <input
          type="text"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
          required
        />
      </div>

      {/* Category */}

      <div>

  <label className="font-medium">
    Categories
  </label>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">

    {categories.map((cat: any) => (

<label
  key={cat.id}
  className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
>

<input
type="checkbox"
checked={form.category.includes(String(cat.id))}
onChange={(e)=>{

if(e.target.checked){

setForm(prev=>({
...prev,
category:[
...prev.category,
String(cat.id)
]
}));

}else{

setForm(prev=>({
...prev,
category:prev.category.filter(
item=>item!==String(cat.id)
)
}));

}

}}
/>

<span>{cat.name}</span>

</label>

))}

  </div>

</div>

      {/* Featured Image */}

      <div>

      <label className="font-medium">
        Featured Image
      </label>

      <input
  type="file"
  accept="image/*"
  className="w-full border rounded-lg p-3 mt-1"
  onChange={(e) => {
    const file = e.target.files?.[0];

    setImageError("");

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setImageError("Image size must be less than 1 MB.");
      e.target.value = "";
      setImageFile(null);
      return;
    }

    setImageFile(file);
  }}
/>

{imageError && (
  <p className="mt-2 text-sm text-red-600 font-medium">
    {imageError}
  </p>
)}

      {imageFile ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Preview"
          className="w-56 mt-4 rounded-lg border"
        />
      ) : (
        featuredImage && (
          <img
            src={featuredImage}
            alt="Current Image"
            className="w-56 mt-4 rounded-lg border"
          />
        )
      )}

      </div>

      {/* Excerpt */}

      <div>

        <label className="font-medium">
          Excerpt
        </label>

        <textarea
          rows={4}
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
        />

      </div>

      {/* Content */}

     <div className="border rounded-xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    Blog Sections
  </h2>

  {sections.map((section, index) => (

    <div
      key={index}
      className="border rounded-lg p-5 mb-6"
    >

      <label className="font-medium">
        Heading Tag
      </label>

      <select
        value={section.tag}
        onChange={(e) =>
          updateSection(index, "tag", e.target.value)
        }
        className="w-full border rounded-lg p-3 mt-1"
      >
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="h4">H4</option>
        <option value="p">Paragraph</option>
      </select>

      <label className="font-medium block mt-4">
        Heading
      </label>

      <input
        type="text"
        value={section.title}
        onChange={(e) =>
          updateSection(index, "title", e.target.value)
        }
        className="w-full border rounded-lg p-3 mt-1"
      />

      <label className="font-medium block mt-4">
        Details
      </label>

      <textarea
        rows={6}
        value={section.details}
        onChange={(e) =>
          updateSection(index, "details", e.target.value)
        }
        className="w-full border rounded-lg p-3 mt-1"
      />

      <button
        type="button"
        onClick={() => removeSection(index)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Remove Section
      </button>

    </div>

  ))}

  <button
    type="button"
    onClick={addSection}
    className="bg-blue-600 text-white px-5 py-3 rounded-lg"
  >
    + Add Section
  </button>

</div>

      <hr />

      <h2 className="text-2xl font-bold">
        SEO Settings
      </h2>

      {/* Meta Title */}

      <input
        type="text"
        name="meta_title"
        value={form.meta_title}
        onChange={handleChange}
        placeholder="Meta Title"
        className="w-full border rounded-lg p-3"
      />

      {/* Meta Description */}

      <textarea
        rows={4}
        name="meta_description"
        value={form.meta_description}
        onChange={handleChange}
        placeholder="Meta Description"
        className="w-full border rounded-lg p-3"
      />

      {/* Meta Keywords */}

      <input
        type="text"
        name="meta_keywords"
        value={form.meta_keywords}
        onChange={handleChange}
        placeholder="Meta Keywords"
        className="w-full border rounded-lg p-3"
      />

      {/* Canonical */}

      <input
        type="text"
        name="canonical_url"
        value={form.canonical_url}
        onChange={handleChange}
        placeholder="Canonical URL"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Title */}

      <input
        type="text"
        name="og_title"
        value={form.og_title}
        onChange={handleChange}
        placeholder="OG Title"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Description */}

      <textarea
        rows={4}
        name="og_description"
        value={form.og_description}
        onChange={handleChange}
        placeholder="OG Description"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Image */}

      <div>
  <label className="font-medium">
    OG Image
  </label>

  <input
  type="file"
  accept="image/*"
  className="w-full border rounded-lg p-3 mt-1"
  onChange={(e) => {
    const file = e.target.files?.[0];

    setOgImageError("");

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setOgImageError("OG Image size must be less than 1 MB.");
      e.target.value = "";
      setOgImageFile(null);
      return;
    }

    setOgImageFile(file);
  }}
/>

{ogImageError && (
  <p className="mt-2 text-sm text-red-600 font-medium">
    {ogImageError}
  </p>
)}

  {ogImageFile ? (
    <img
      src={URL.createObjectURL(ogImageFile)}
      alt="OG Preview"
      className="w-56 mt-4 rounded-lg border"
    />
  ) : (
    currentOgImage && (
      <img
        src={currentOgImage}
        alt="Current OG"
        className="w-56 mt-4 rounded-lg border"
      />
    )
  )}
</div>
<div className="border-t pt-8">

  <h2 className="text-2xl font-bold mb-6">
    FAQs
  </h2>

  {faqs.map((faq, index) => (

    <div
      key={index}
      className="border rounded-lg p-4 mb-5"
    >

      <label className="font-medium">
        Question
      </label>

      <input
        type="text"
        value={faq.question}
        onChange={(e) =>
          updateFaq(index, "question", e.target.value)
        }
        className="w-full border rounded-lg p-3 mt-1"
      />

      <label className="font-medium mt-4 block">
        Answer
      </label>

      <textarea
        rows={4}
        value={faq.answer}
        onChange={(e) =>
          updateFaq(index, "answer", e.target.value)
        }
        className="w-full border rounded-lg p-3 mt-1"
      />

      <button
        type="button"
        onClick={() => removeFaq(index)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Remove FAQ
      </button>

    </div>

  ))}

  <button
    type="button"
    onClick={addFaq}
    className="bg-blue-600 text-white px-5 py-3 rounded-lg"
  >
    + Add FAQ
  </button>

</div>

      {/* Status */}

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >

        <option value="draft">
          Draft
        </option>

        <option value="published">
          Published
        </option>

      </select>

      <div className="flex gap-4 pt-6">

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Updating..."
            : "Update Blog"}
        </button>

        <button
          type="button"
          onClick={deleteBlog}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() =>
            router.push("/admin/blogs")
          }
          className="border px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </form>

  );

}
"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface TestimonialItemProps {
  item: any;
  index: number;
  items: any[];
  update: (field: string, value: any) => void;
}

function TestimonialItem({
  item,
  index,
  items,
  update,
}: TestimonialItemProps) {
  const [open, setOpen] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  useEffect(() => {
    if (item.image instanceof File) {
      const url =
        URL.createObjectURL(item.image);

      setPreview(url);

      return () =>
        URL.revokeObjectURL(url);
    }

    if (
      typeof item.image === "string"
    ) {
      setPreview(item.image);
    }
  }, [item.image]);

  function updateItem(
    field: string,
    value: any
  ) {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update(
      "testimonials",
      updated
    );
  }

  function removeItem() {
    const updated = [...items];

    updated.splice(index, 1);

    update(
      "testimonials",
      updated
    );
  }

  return (
    <div className="rounded-xl border-light-all">

      <div className="flex items-center justify-between p-4">

        <button
          type="button"
          onClick={() =>
            setOpen(!open)
          }
          className="flex items-center gap-2 font-semibold"
        >
          {open ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}

          Testimonial {index + 1}
        </button>

        <button
          type="button"
          onClick={removeItem}
          className="text-red-500"
        >
          <Trash2 size={18} />
        </button>

      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">

          <div>
            <label className="form-label">
              Quote
            </label>

            <textarea
              rows={6}
              className="form-textarea"
              value={
                item.quote ?? ""
              }
              onChange={(e) =>
                updateItem(
                  "quote",
                  e.target.value
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="form-label">
                Student Name
              </label>

              <input
                className="form-control"
                value={
                  item.name ?? ""
                }
                onChange={(e) =>
                  updateItem(
                    "name",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label className="form-label">
                Google Review Link
              </label>

              <input
                className="form-control"
                value={
                  item.link ?? ""
                }
                onChange={(e) =>
                  updateItem(
                    "link",
                    e.target.value
                  )
                }
              />
            </div>

          </div>
                    {/* Student Image */}

          <div>
            <label className="form-label">
              Student Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="form-control img-input"
              onChange={(e) => {
                const file =
                  e.target.files?.[0];

                if (!file) return;

                updateItem(
                  "image",
                  file
                );
              }}
            />

            {preview && (
              <img
                src={preview}
                className="mt-4 h-24 w-24 rounded-full border object-cover"
              />
            )}
          </div>

        </div>
      )}

    </div>
  );
}

export default function TestimonialSection({
  data,
  onChange,
}: Props) {

  function update(
    field: string,
    value: any
  ) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const testimonials =
    data?.testimonials || [];

  return (
    <div className="space-y-6">

      {/* Eyebrow */}

      <div>
        <label className="form-label">
          Eyebrow
        </label>

        <input
          className="form-control"
          value={
            data?.eyebrow ?? ""
          }
          onChange={(e) =>
            update(
              "eyebrow",
              e.target.value
            )
          }
        />
      </div>

      {/* Heading */}

      <div>
        <label className="form-label">
          Heading
        </label>

        <textarea
          rows={3}
          className="form-textarea"
          value={
            data?.heading ?? ""
          }
          onChange={(e) =>
            update(
              "heading",
              e.target.value
            )
          }
        />
      </div>

      {/* Rating */}

      <div className="grid grid-cols-2 gap-5">

        <div>
          <label className="form-label">
            Rating
          </label>

          <input
            className="form-control"
            value={
              data?.rating ?? ""
            }
            onChange={(e) =>
              update(
                "rating",
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label className="form-label">
            Review Label
          </label>

          <input
            className="form-control"
            value={
              data?.reviewLabel ??
              ""
            }
            onChange={(e) =>
              update(
                "reviewLabel",
                e.target.value
              )
            }
          />
        </div>

      </div>
            {/* Google Reviews Image */}

      <div>
        <label className="form-label">
          Google Reviews Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update(
              "googleImage",
              file
            );
          }}
        />

        {data?.googleImage &&
          typeof data.googleImage ===
            "string" && (
            <img
              src={data.googleImage}
              className="mt-4 h-16 rounded border"
            />
          )}
      </div>

      {/* Testimonials */}

      <div>

        <div className="flex items-center justify-between mb-4">

          <label className="form-label">
            Testimonials
          </label>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update(
                "testimonials",
                [
                  ...testimonials,
                  {
                    quote: "",
                    name: "",
                    link: "",
                    image: "",
                  },
                ]
              )
            }
          >
            <Plus size={16} />
            Add Testimonial
          </button>

        </div>

        <div className="space-y-4">

          {testimonials.map(
            (
              item: any,
              index: number
            ) => (
              <TestimonialItem
                key={index}
                item={item}
                index={index}
                items={testimonials}
                update={update}
              />
            )
          )}

        </div>

      </div>

    </div>
  );
}
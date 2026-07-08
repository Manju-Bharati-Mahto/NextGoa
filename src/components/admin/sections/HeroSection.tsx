"use client";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function HeroSection({ data, onChange, }: Props) {
  const [preview, setPreview] = useState("");
  useEffect(() => {

    if (data?.backgroundImage instanceof File) {

      const url = URL.createObjectURL(
        data.backgroundImage
      );

      setPreview(url);

      return () => URL.revokeObjectURL(url);

    }

    if (
      typeof data?.backgroundImage === "string" &&
      data.backgroundImage
    ) {

      setPreview(data.backgroundImage);

    }

  }, [data?.backgroundImage]);

  function update( field: string, value: string ) {
    onChange({ ...data, [field]: value, });
  }

  return (

    <div className="space-y-5">
      <div>
        <label className="form-label"> Title </label>
        <input className="form-control" value={data?.title ?? ""} onChange={(e)=> update( "title", e.target.value ) } />
      </div>
      <div>
        <label className="form-label"> Heading Highlight </label>
        <input className="form-control" value={data?.headingHighlight ?? ""} onChange={(e) => update( "headingHighlight", e.target.value ) } />
      </div>
      <div>
        <label className="form-label"> Subtitle </label>
        <textarea rows={3} className="form-control" value={data?.subtitle ?? ""} onChange={(e)=> update( "subtitle", e.target.value ) } />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="form-label"> Button Text </label>
          <input className="form-control" value={data?.buttonText ?? ""} onChange={(e)=> update( "buttonText", e.target.value ) } />
        </div>

        <div>
          <label className="form-label"> Button Link </label>
          <input className="form-control" value={data?.buttonLink ?? ""} onChange={(e)=> update( "buttonLink", e.target.value ) } />
        </div>
      </div>

      <div>
       <label className="form-label"> Background Image </label>
       <input type="file" accept="image/*" className="form-control img-input" onChange={(e) => { const file = e.target.files?.[0]; if (!file) return; onChange({ ...data, backgroundImage: file, }); }} />
        {preview && (
          <div>
            <label className="form-label mb-2 block"> Preview </label>
            <img src={preview} alt="Preview" className="w-full max-w-md rounded-xl border object-cover" />
          </div>
        )}
      </div>

    </div>

  );

}
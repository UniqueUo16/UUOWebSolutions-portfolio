"use client";

import { useState } from "react";
import { Send, ImageIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    if (image) formData.append("image", image);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-mail`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("✅ Message sent successfully!");
      router.push("/Ex_pages/Watsapp");
    } catch (err) {
      alert(err.message || "❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-12 text-gray-800 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Contact Me
        </h2>

        <input
          name="name"
          required
          placeholder="Full Name"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />

        <textarea
          name="message"
          required
          placeholder="Your message..."
          rows={4}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />

        <label className="flex items-center gap-3 cursor-pointer text-gray-800">
          <ImageIcon />
          <span>Upload image (optional)</span>
          <input type="file" accept="image/*" hidden onChange={handleImage} />
        </label>

        {preview && (
          <img
            src={preview}
            className="w-32 h-32 object-cover rounded-full mx-auto border"
          />
        )}

        <button
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Send />}
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
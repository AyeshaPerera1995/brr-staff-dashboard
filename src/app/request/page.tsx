"use client";
import { useState } from "react";
import { issueTypes } from "@/data/mockData";

export default function ITRequest() {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    // Simulate async request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setIssueType("");
      setDescription("");
      setFile(null);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Submit IT Support Request
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Fill out the form below and our IT team will assist you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg rounded-2xl p-6 sm:p-8 space-y-6"
      >
        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">Issue Type</label>
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select an issue type</option>
            {issueTypes.map((issue) => (
              <option key={issue} value={issue}>{issue}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the issue in detail"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 dark:text-white">
            Upload File <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
          />
          {file && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Selected: {file.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 dark:text-green-400 font-medium animate-pulse mt-4">
            ✅ Request submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
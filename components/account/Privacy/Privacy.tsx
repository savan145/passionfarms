"use client";

import React, { useState } from "react";

export function Privacy() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new === passwords.confirm) {
      alert("Password changed successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
      setShowPasswordForm(false);
    } else {
      alert("New passwords do not match!");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Privacy & Security</h2>

      <div className="space-y-6">
        {/* Password Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          {!showPasswordForm ? (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Change Password
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="new"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => setShowPasswordForm(false)}
                  className="border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Two-Factor Authentication */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
          <p className="text-gray-600 text-sm mb-4">
            Add an extra layer of security to your account
          </p>
          <button className="border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Enable 2FA
          </button>
        </div>

        {/* Session Management */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
          <p className="text-gray-600 text-sm mb-4">
            Manage your active login sessions
          </p>
          <button className="border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            View Sessions
          </button>
        </div>

        {/* Delete Account */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
          <p className="text-gray-600 text-sm mb-4">
            Permanently delete your account and all associated data
          </p>
          <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

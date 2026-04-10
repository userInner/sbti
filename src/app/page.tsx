"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function Home() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setTotal(data.total);
        }
      })
      .catch(err => console.error("获取统计失败:", err));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-widest text-yellow-900">2026 最新爆款</h2>
        <h1 className="text-6xl font-black drop-shadow-md text-white tracking-tighter" style={{ WebkitTextStroke: '2px #333' }}>
          SBTI
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          全网最离谱的<br /><span className="text-red-600 underline decoration-wavy">性格测试</span>
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl border-4 border-gray-900 transform rotate-2 w-full max-w-sm">
        <p className="text-gray-800 font-medium mb-4">
          ⚠️ 警告：本测试可能过于真实，引起极度不适，玻璃心请火速撤退。
        </p>
        
        {total !== null && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6 bg-yellow-100 rounded-full py-1 px-3 w-fit mx-auto border border-yellow-300">
            <Users size={16} />
            <span>全网已有 <strong className="text-red-500 font-bold">{total}</strong> 名大冤种参与</span>
          </div>
        )}

        <div className="flex space-x-3 w-full">
          <Link href="/quiz?mode=14" className="flex-1 py-4 bg-gray-900 text-white text-base font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all active:scale-95 border-2 border-transparent hover:border-black hover:bg-yellow-300 hover:text-black flex items-center justify-center">
            速测版 (14题)
          </Link>
          <Link href="/quiz?mode=28" className="flex-1 py-4 bg-yellow-400 text-gray-900 text-base font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all active:scale-95 border-2 border-gray-900 hover:bg-gray-900 hover:text-white flex items-center justify-center">
            完整版 (28题)
          </Link>
        </div>
      </div>

      <p className="text-sm text-yellow-900/60 font-medium">纯属娱乐 · 绝无科学依据</p>
    </main>
  );
}
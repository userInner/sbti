"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Share2, RefreshCcw } from "lucide-react";
import { PERSONALITIES } from "@/lib/data";

function ResultContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "HHHH";
  const count = searchParams.get("count") || "1";
  const [copied, setCopied] = useState(false);

  const personality = PERSONALITIES.find(p => p.code === code) || PERSONALITIES[PERSONALITIES.length - 1];
  const imagePath = `/images/results/${code.replace(/[^a-zA-Z0-9-]/g, '')}.svg`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLink = () => {
    // 实际项目中可替换为真实线上域名
    const url = typeof window !== 'undefined' ? window.location.origin : '';
    navigator.clipboard.writeText(`我刚刚测出了我的SBTI人格是【${personality.name}】，你也来试试这全网最离谱的测试吧！👉 ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#2a2a2a] text-white">
      <div className="w-full flex justify-between items-center mb-6">
        <Link href="/" className="text-gray-400 flex items-center text-sm font-bold hover:text-white transition-colors">
          <RefreshCcw size={16} className="mr-1" /> 重测一次
        </Link>
        <span className="bg-yellow-400 text-black text-xs font-black px-2 py-1 rounded-sm">SBTI</span>
      </div>

      {/* 结果图片卡片 */}
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-900 relative transform rotate-1">
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-bold rounded-full z-10">
           No. {Number(count).toLocaleString()}
        </div>
        <div className="relative w-full aspect-[3/4]">
           <Image 
             src={imagePath} 
             alt={personality.name}
             fill
             className="object-cover"
             priority
           />
        </div>
        <div className="p-4 bg-white text-gray-900">
          <h2 className="text-3xl font-black mb-2">{personality.name}</h2>
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            "{personality.desc}"
          </p>
        </div>
      </div>

      {/* 底部操作区 */}
      <div className="w-full max-w-sm mt-8 space-y-4">
        <button 
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
        >
          {copied ? <span className="text-green-800">✅ 链接已复制！快去小红书/微信发疯</span> : <><Copy size={20} className="mr-2" /> 复制发疯文案去装B</>}</button>
        
        <p className="text-center text-gray-400 text-xs font-medium mt-4">
          提示：直接截图保存上方卡片，发到朋友圈或小红书更吸引人哦！
        </p>
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center text-yellow-400 font-bold">生成诊断报告中...</div>}>
      <ResultContent />
    </Suspense>
  );
}

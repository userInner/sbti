"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS } from "@/lib/data";
import { Dimensions } from "@/lib/algorithm";

function QuizContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const questionLimit = mode === "14" ? 14 : 28;
  const questions = QUESTIONS.slice(0, questionLimit);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [dims, setDims] = useState<Dimensions>({ ego: 0, emotion: 0, attitude: 0, action: 0, social: 0 });
  const [isDrunk, setIsDrunk] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();

  const handleOptionClick = async (option: any) => {
    // 聚合分数
    const newDims = { ...dims };
    if (option.dims) {
      if (option.dims.isDrunk) setIsDrunk(true);
      if (option.dims.ego) newDims.ego += option.dims.ego;
      if (option.dims.emotion) newDims.emotion += option.dims.emotion;
      if (option.dims.attitude) newDims.attitude += option.dims.attitude;
      if (option.dims.action) newDims.action += option.dims.action;
      if (option.dims.social) newDims.social += option.dims.social;
    }
    setDims(newDims);

    if (currentIdx < questions.length - 1) {
      // 下一题
      setCurrentIdx(currentIdx + 1);
    } else {
      // 提交结果
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dims: newDims, isDrunk: option.dims?.isDrunk || isDrunk }),
        });
        const data = await res.json();
        if (data.success) {
          router.push(`/result?code=${data.data.code}&count=${data.data.count}`);
        } else {
          alert("服务器累死啦，重试一下吧~");
          setIsSubmitting(false);
        }
      } catch (err) {
        alert("网络不太行哦！");
        setIsSubmitting(false);
      }
    }
  };

  const progress = ((currentIdx + 1) / questions.length) * 100;
  const currentQ = questions[currentIdx];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden relative">
      {/* 进度条 */}
      <div className="w-full bg-gray-200 h-2 absolute top-0 left-0">
        <div 
          className="bg-black h-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 w-full max-w-sm mx-auto p-6 pt-16 flex flex-col">
        <p className="text-gray-400 font-bold mb-4 text-sm tracking-widest">
          QUESTION {currentIdx + 1} / {questions.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-1 flex flex-col"
          >
            <h2 className="text-2xl font-black text-gray-900 leading-snug mb-8">
              {currentQ.text}
            </h2>

            <div className="space-y-4 mt-auto mb-10">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  disabled={isSubmitting}
                  className="w-full text-left p-4 bg-white border-2 border-gray-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all active:scale-95 font-bold text-gray-800 flex items-center group"
                >
                  <span className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-colors">
                     {String.fromCharCode(65 + idx)}
                  </span>
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* 全屏 Loading 层 */}
      {isSubmitting && (
        <div className="absolute inset-0 z-50 bg-yellow-400 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-2xl font-black text-black animate-pulse">正在连线你的大脑电波...</p>
        </div>
      )}
    </div>
  );
}

export default function Quiz() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 font-bold">加载中...</div>}>
      <QuizContent />
    </Suspense>
  );
}
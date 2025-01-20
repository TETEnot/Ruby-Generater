"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const RubyConverter: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [convertedText, setConvertedText] = useState<string>("");
  const [htmlText, setHtmlText] = useState<string>("");

  const handleConvert = () => {
    // 半角括弧と縦棒に対応した正規表現
    const rubyPattern = /([^\|]+?)\|（(.+?)）/g;
    const result = inputText.replace(
      rubyPattern,
      (_, kanji, ruby) => `<ruby>${kanji}<rt>${ruby}</rt></ruby>`
    );

    setConvertedText(result); // HTMLとしてレンダリング
    setHtmlText(result); // HTMLコード形式の結果を保存
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans flex flex-col">
      {/* ヘッダー */}
      <header className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-bold">Ruby Converter</h1>
        <nav className="flex space-x-6">
          <a
            href="https://twitter.com/Tenmaru0101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
          </a>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center py-16 px-8 lg:space-x-16">
        {/* 左側のフォーム */}
        <div className="w-full lg:w-2/3 bg-gray-800 rounded-xl shadow-md p-8 relative border border-gray-700">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Convert Text with Ruby Notations
          </h2>
          <textarea
            className="w-full h-32 border border-gray-600 rounded-md p-4 mb-6 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-900 text-white"
            placeholder="例: 漢字|（かんじ）を入力してください"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-sm hover:bg-yellow-500 w-full"
            onClick={handleConvert}
          >
            変換
          </button>
          {convertedText && (
            <div className="mt-6 bg-gray-900 rounded-md p-4 border border-gray-600">
              <h3 className="text-xl font-semibold mb-2 text-white">
                表示結果:
              </h3>
              <div
                className="text-lg whitespace-pre-wrap text-white"
                dangerouslySetInnerHTML={{ __html: convertedText }}
              />
            </div>
          )}
        </div>

        {/* 右側のキャラクター */}
        <div className="relative w-full lg:w-1/3 flex justify-center mt-12 lg:mt-0">
          <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-br from-yellow-500 via-yellow-700 to-gray-900 blur-lg rounded-full opacity-20"></div>
          <Image
            src="/character.png"
            alt="Anime-style character"
            width={400}
            height={400}
            className="relative z-10 rounded-lg"
          />
          <div className="absolute top-4 left-4 w-[400px] h-[400px] rounded-lg border-[3px] border-yellow-400 z-0"></div>
        </div>
      </main>

      {/* HTMLテキスト表示エリア */}
      {htmlText && (
        <div className="bg-gray-800 p-6 rounded-md shadow-md border border-gray-600 mx-8 mb-8">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            HTML形式の結果:
          </h3>
          <textarea
            className="w-full h-32 bg-gray-900 text-white p-4 rounded-md border border-gray-600"
            value={htmlText}
            readOnly
          />
        </div>
      )}

      {/* フッター */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p className="text-sm">© 2025 Ruby Converter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RubyConverter;

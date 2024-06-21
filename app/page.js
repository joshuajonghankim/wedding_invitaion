'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import LivereComments from "./LivereComments";

function copyText(entryText) {
  navigator.clipboard.writeText(entryText);
  alert("복사되었습니다.");
}

export default function Home() {
  const [showGroomAccounts, setShowGroomAccounts] = useState(false);  // 신랑측 계좌 상태
  const [showBrideAccounts, setShowBrideAccounts] = useState(false);  // 신부측 계좌 상태
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageWidth, setImageWidth] = useState(0);

  const images = [
    { src: '/images/g0.jpg', alt: 'g0' },
    { src: '/images/g1.jpg', alt: 'g1' },
    { src: '/images/g2.jpg', alt: 'g2' },
    { src: '/images/g3.jpg', alt: 'g3' },
    { src: '/images/g4.jpg', alt: 'g4' },
    { src: '/images/g5.jpg', alt: 'g5' },
    { src: '/images/g6.jpg', alt: 'g6' },
    { src: '/images/g7.jpg', alt: 'g7' },
    { src: '/images/g8.jpg', alt: 'g8' },
    { src: '/images/g9.jpg', alt: 'g9' },
    { src: '/images/g10.jpg', alt: 'g10' },
  ];

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      if (!isPlaying) {
        setIsPlaying(true);
      }
      // 스크롤 이벤트 리스너는 한 번만 실행되면 됩니다.
      window.removeEventListener('scroll', handleScroll);
    };

    // 페이지가 로드될 때 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 unmount될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열을 넘겨 한 번만 실행되도록 설정

  useEffect(() => {
    // 음악 재생 상태에 따라 재생 및 정지
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("자동 재생이 차단되었습니다.", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(prevState => !prevState);
  };

  useEffect(() => {
    // 클라이언트에서만 실행되도록 설정
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        // window.innerHeight를 이용하여 이미지 width 계산
        const newImageWidth = (window.innerHeight * 6 / 10 - 3) / 3;
        setImageWidth(newImageWidth);
      };

      // 초기 설정 및 리사이즈 이벤트 리스너 추가
      handleResize();
      window.addEventListener('resize', handleResize);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // 네이버 지도 API 스크립트 호출
    const script = document.createElement("script");
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbpkc88r6x";
    script.async = true;
    script.onload = () => createMap();
    document.body.appendChild(script);

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.body.removeChild(script);
    };
  }, []);

  const createMap = () => {
    if (window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.4163636, 126.8848772),
        zoom: 15
      };
      const map = new window.naver.maps.Map('map', mapOptions);
    }
  };

  return (
    <main className="w-full h-full overflow-x-hidden bg-bgcolor-sky">
      <div className="relative h-screen w-screen snap-mandatory snap-y overflow-y-auto flex flex-col">

        {/* Main page */}
        <div className="relative snap-center snap-always min-h-screen min-w-full flex flex-col justify-center items-center bg-white">
          <div className="h-1.5/10 flex flex-col justify-center text-center font-MapoGoldenPier text-gray-700">
            <h1 className="text-4xl">July|20|2024</h1>
            <h2 className="mt-2 text-sm tracking-widest">SATURDAY</h2>
          </div>
          
          <div className="max-w-8/10 h-6/10">
            <Image
            src="/images/main.jpg"
            alt="cover_image"
            width={1000}
            height={1500}
            className="max-h-full"
          /></div>

          <div className="h-1.5/10 flex flex-col justify-center text-center font-MapoGoldenPier text-gray-700">
            <h1 className="text-3xl">이성연 & 김한은</h1>
            <h1 className="mt-4 text-sm">2024.7.20. 토요일 낮 12시</h1>
            <h1 className="mt-1 text-sm">광명역사컨벤션웨딩홀</h1>
          </div>

        </div>

        <div className="snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <div className="text-center text-wrap m-10">
            <h1 className="text-sm font-MapoGoldenPier text-custom-blue">I N V I T A T I O N</h1>
            <h1 className="text-xl font-MapoGoldenPier text-custom-blue">
              초대합니다<br></br><br></br>
            </h1>
            <h1 className="text-sm font-MapoGoldenPier text-gray-700 text-wrap leading-loose">
              주님의 사랑으로 만난 두 사람이<br></br>
              이제 새로운 가정을 이루는<br></br>
              아름다운 약속을 하려 합니다.<br></br><br></br>
              언제나 예수님 안에서 아름답고<br></br>
              주위에 사랑을 나누는<br></br>
              행복한 가정을 이루도록<br></br>
              오셔서 축복해주세요.<br></br>
              <div className="flex justify-center items-center my-4">
                <Image
                  src="/images/cross.png"
                  alt="Cross Image"
                  width={20}
                  height={20}
                  className="block"
                />
              </div>
              <span class="text-base">이영우</span>, <span class="text-base">신신숙</span>의 장남 <strong class="text-base">이성연</strong><br></br>
              <span class="text-base">김규백</span>, <span class="text-base">김영정</span>의 차녀 <strong class="text-base">김한은</strong>
            </h1>
          </div>
        </div>

        {/*
        <div dir="ltr" className="absolute top-48 snap-x snap-mandatory overflow-x-auto flex flex-row">
            <Image
              src="/images/g0.jpg"
              alt="g0"
              className="snap-center snap-always ml-10 mr-5 w-2/3 md:h-96"
              width={600}
              height={1200}
            />
            <Image
              src="/images/g1.jpg"
              alt="g1"
              className="snap-center snap-always mx-5 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
            />
            <Image
              src="/images/g2.jpg"
              alt="g2"
              className="snap-center snap-always mx-5 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
            />
            <Image
              src="/images/g3.jpg"
              alt="g3"
              className="snap-center snap-always mx-5 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
            />
            <Image
              src="/images/g4.jpg"
              alt="g4"
              className="snap-center snap-always mx-5 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
            />
            <Image
              src="/images/g5.jpg"
              alt="g5"
              className="snap-center snap-always ml-5 mr-10 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
            />
        */}

        <div className="relative snap-center snap-always min-h-screen w-full flex flex-col justify-center items-center bg-bgcolor-sky bg-cover bg-center">
          <h1 className="text-xl font-MapoGoldenPier text-custom-blue font-extralight">G A L L E R Y</h1>

          <div className="mt-8 max-h-6/10 overflow-y-auto grid grid-cols-2 grid-flow-row gap-1.5 mx-5">
            {images.map((image, index) => (
              <div key={index} className="">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer object-cover aspect-square"
                  width={imageWidth}
                  height={imageWidth}
                  onClick={() => setSelectedImage(image.src)}
                />
              </div>
            ))}
          </div>

          {/* Modal for displaying the selected image */}
          {selectedImage && (
            <div className="max-h-screen fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  className="object-contain p-5 max-h-screen w-auto"
                  width={800}
                  height={800}
                  onClick={() => setSelectedImage(null)}
                />
                <button
                  className="absolute top-5 right-7 text-white text-2xl"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <div className="absolute top-14 text-center">
            <h1 className="text-sm font-MapoGoldenPier text-custom-blue">L O C A T I O N</h1>
            <h1 className="text-xl font-MapoGoldenPier text-custom-blue">오시는 길</h1>
          </div>
          <div className="absolute top-32 max-h-6/10 font-MapoGoldenPier text-gray-700 flex flex-col items-center justify-center leading-normal">
            <h1 className="text-center text-base font-bold">광명역사컨벤션웨딩홀</h1>
            <h2 className="text-sm mx-10 text-wrap items-center flex flex-col text-center">
              경기도 광명시 광명역로 21<br></br>
              KTX광명역 동편 B1<br></br>
            </h2>

            {/* Map */}
            <div className="border mt-4 max-h-40 overscroll-none"
              id="map" style={{ width: '100%', maxWidth: 350, height: 200 }}>
            </div>

            {/* Map Buttons */}
            <div className="flex mt-4 space-x-4">
              <a
                href="https://map.naver.com/p/search/%EA%B4%91%EB%AA%85%EC%97%AD%EC%82%AC%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9%ED%99%80?c=15.00,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-row flex items-center"
              >
                <Image
                  src="/images/naver.webp"
                  alt="네이버 지도"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <h2 className="text-xs ml-1">네이버 지도</h2>
              </a>
              <a
                href="https://map.kakao.com/link/map/23753350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-row flex items-center"
              >
                <Image
                  src="/images/kakao.svg"
                  alt="카카오맵"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <h2 className="text-xs ml-1">카카오 지도</h2>
              </a>
            </div>
          </div>
          <div className="absolute top-2/3 font-MapoGoldenPier text-xs text-wrap text-gray-700 leading-normal">
            <h1 className="text-custom-blue text-left">
              지하철
            </h1>
            1호선 광명역 지하철 운행 (영등포 - 광명역)<br></br>
            1호선 관악역 1번 출구 (마을버스1-1 운행)<br></br><br></br>
            <h1 className="text-custom-blue text-left">주차 (2시간 무료)</h1>
            광명 센트럴자이 상가 주차장 B3층<br></br>
            광명 파크자이 오피스텔 주차장 B2층<br></br><br></br>
            <h1 className="text-custom-blue text-left text-sm leading-normal font-serif">※ 연회장 입구 직원분께 말씀해주시면<br /> 무료주차 2시간 입력해드립니다.
            </h1>
          </div>
        </div>

        <div className="relative snap-center snap-always min-h-screen min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <div className="absolute top-20 flex flex-col items-center">
            <svg className="mb-3 stroke-custom-blue size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

            <h1 className="mb-3 text-xl font-MapoGoldenPier text-custom-blue">
              참석여부 알리기
            </h1>

            <a className="text-sm font-MapoGoldenPier rounded-xl p-2 text-gray-700 border border-gray-400 shadow-md"
              href="https://forms.gle/S2SnGE7jT2SuxhF68"
              target="_blank"
              rel="noopener noreferrer"
            >
              알리기
            </a>
          </div>

          <div className="absolute top-1/3 font-MapoGoldenPier flex flex-col items-center">
            <div className="flex justify-center items-center mb-3">
              <Image
                src="/images/heart.png"
                alt="heart image"
                width={20}
                height={20}
                className="block"
              />
            </div>

            <h1 className="text-xl text-custom-blue">
              마음 전하실 곳
            </h1>

            <div className="w-screen mt-3 px-10 text-sm">
              <div className="p-2 rounded-lg shadow-md mb-4 bg-bgcolor-sky">
                <button
                  onClick={() => setShowGroomAccounts(!showGroomAccounts)}
                  className="w-full flex items-center"
                >
                  <div className="flex-grow text-center text-gray-700">
                    신랑측 계좌
                  </div>
                  <img
                    src="/images/down.png"
                    alt="Down arrow"
                    className="w-4 h-4 ml-auto"
                  />
                </button>
                {showGroomAccounts && (
                  <div className="mt-4 text-gray-700">
                    <p className="text-sm flex justify-between items-center">
                      <span>카카오뱅크 3333-10-5382056<br></br>
                        이성연</span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("3333-10-5382056")}>
                        복사하기
                      </button>
                    </p>
                    <p className="text-sm mt-2 flex justify-between items-center">
                      <span>SC제일은행 600-20-373733<br></br>
                        이영우</span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("600-20-373733")}>
                        복사하기
                      </button>
                    </p>
                    <p className="text-sm mt-2 flex justify-between items-center">
                      <span>국민은행 679802-93-115438<br></br>
                        신신숙<br></br></span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("679802-93-115438")}>
                        복사하기
                      </button>
                    </p>
                  </div>
                )}
              </div>

              <div className="p-2 rounded-lg bg-bgcolor-sky text-gray-700">
                <button
                  onClick={() => setShowBrideAccounts(!showBrideAccounts)}
                  className="w-full flex items-center"
                >
                  <div className="flex-grow text-center text-gray-700">
                    신부측 계좌
                  </div>
                  <img
                    src="/images/down.png"
                    alt="Down arrow"
                    className="w-4 h-4 ml-auto"
                  />
                </button>
                {showBrideAccounts && (
                  <div className="mt-4 text-gray-700">
                    <p className="text-sm flex justify-between items-center">
                      <span>카카오뱅크 3333-28-6191015<br></br>
                        김한은</span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("3333-28-6191015")}>
                        복사하기
                      </button>
                    </p>
                    <p className="text-sm mt-2 flex justify-between items-center">
                      <span>농협 702076-52-131271<br></br>
                        김규백</span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("702076-52-131271")}>
                        복사하기
                      </button>
                    </p>
                    <p className="text-sm mt-2 flex justify-between items-center">
                      <span>대구은행 009-08-312442<br></br>
                        김영정</span>
                      <button className="ml-2 text-blue-500" onClick={() => copyText("009-08-312442")}>
                        복사하기
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>

      </div>

      <LivereComments />

      <footer className='flex flex-col items-center text-xs text-gray-700'>
        <p className="bottom-5">&copy; 2024 Joshua Jonghan Kim. All rights reserved.</p>
      </footer>

      {/* Speaker Image */}
      <div className="fixed right-3 top-3 z-auto">
        {/* isPlaying 상태에 따라 이미지 변경 */}
        <button onClick={toggleMusic}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-custom-blue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-custom-blue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          )}
        </button>
      </div>

      {/* audio 요소 추가 */}
      <audio ref={audioRef} src="/music/In-your-heart[1.2].m4a" type="audio/mpeg" />

    </main>
  );
}
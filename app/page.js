'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';

//import CommentsFunction from "./commentsj";

function copyText(entryText) {
  navigator.clipboard.writeText(entryText);
  alert("복사되었습니다.");
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("자동 재생이 차단되었습니다.", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // 페이지가 로드될 때 자동 재생 시도
    setIsPlaying(true);

    // 오디오를 수동으로 재생 시도 (자동 재생이 브라우저에서 차단될 경우 대응)
    const audioPlayPromise = audioRef.current.play();
    if (audioPlayPromise !== undefined) {
      audioPlayPromise
        .then(() => {
          console.log("오디오 자동 재생 성공");
        })
        .catch((error) => {
          console.log("오디오 자동 재생 실패", error);
        });
    }
  }, []);

  const toggleMusic = () => {
    setIsPlaying(prevState => !prevState);
  };

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
        zoom: 14
      };
      const map = new window.naver.maps.Map('map', mapOptions);
    }
  };

  return (
    <main className="w-dvw scrollbar-hide overflow-x-hidden">
      <div className="relative overflow-y-auto overflow-x-hidden snap-mandatory h-screen w-screen snap-y flex flex-col items-center justify-between ">

        {/* Main page */}
        <div className="relative snap-center snap-always min-h-svh min-w-full flex justify-center items-center bg-white bg-cover bg-center">

          <div className='absolute w-full h-2/3 bg-main-1 bg-cover top-0 sm:bg-main-2 bg-center bg-fixed'>
          </div>

          <div className="text-center absolute top-2/3 font-MapoGoldenPier text-gray-700">
            <h1 className="text-4xl mb-8 mt-10">이성연 & 김한은</h1>
            <h1 className="text-1xl mb-2">2024.7.20 토요일 낮 12시</h1>
            <h1 className="text-1xl">광명역사컨벤션웨딩홀</h1>
          </div>

        </div>

        <div className="snap-center snap-always min-h-svh min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <div className="text-center text-wrap m-10">
            <h1 className="text-3xl font-MapoGoldenPier text-fontcolor-blue">
              초대합니다<br></br><br></br>
            </h1>
            <h1 className="text-xl font-MapoGoldenPier text-gray-700 text-wrap">
              하나님의 사랑으로 만난 두 사람이<br></br>
              이제 새로운 가정을 이루는<br></br>
              아름다운 약속을 하려 합니다.<br></br>
              언제나 예수님 안에서 아름답고<br></br>
              주위에 사랑을 나누는<br></br>
              행복한 가정을 이루도록<br></br>
              오셔서 축복해주세요.<br></br>
              <br></br>
              이영우
              신신숙
              의 장남 <strong>이성연</strong><br></br>
              김규백
              김영정
              의 차녀 <strong>김한은</strong>
            </h1>
          </div>
        </div>

        <div className="relative snap-center snap-always min-h-svh w-full flex justify-center items-center bg-bgcolor-sky bg-cover bg-center">
          <h1 className="absolute top-20 flex text-center text-3xl font-Hahmlet text-fontcolor-blue font-extralight">G A L L E R Y</h1>

          <div dir="ltr" className="absolute top-48 snap-x snap-mandatory overflow-x-auto flex flex-row">
            <Image
              src="/images/g0.jpg"
              alt="g0"
              className="snap-center snap-always ml-10 mr-5 w-2/3 md:h-96"
              width={600}
              height={1200}
              priority
            />
            <Image
              src="/images/g1.jpg"
              alt="g1"
              className="snap-center snap-always mx-5 w-2/3 h-1/2 md:h-96"
              width={600}
              height={1200}
              p
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

          </div>
        </div>

        <div className="relative snap-center snap-always min-h-svh min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <div className="absolute top-14 text-center">
            <h1 className="text-1xl font-MapoGoldenPier text-fontcolor-blue">L O C A T I O N</h1>
            <h1 className="text-2xl font-MapoGoldenPier text-fontcolor-blue">오시는 길</h1>
          </div>
          <div className="absolute top-32 font-MapoGoldenPier text-gray-700 flex flex-col items-center justify-center">
            <p className="text-center text-lg font-bold">광명역사컨벤션웨딩홀</p>
            <p className="text-lg mx-10 text-wrap items-center flex flex-col text-center">
              경기도 광명시 광명역로 21<br></br>
              KTX광명역 동편 B1<br></br>
              <br></br><br></br></p>

            {/* Map */}
            <div className="border max-h-48 overscroll-none"
              id="map" style={{ width: '100%', maxWidth: 350, height: 200 }}>
            </div>

            {/* Naver Map Button */}
            <a
              href="https://map.naver.com/p/search/%EA%B4%91%EB%AA%85%EC%97%AD%EC%82%AC%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9%ED%99%80/place/36841824?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              네이버 지도에서 보기
            </a>

            <p className="text-center text-lg font-bold">주차장<br></br></p>
            <div className="text-sm mx-10 text-wrap items-center flex flex-col">
              <br></br>
              제1주차장)<br></br>
              센트럴자이 상가 주차장 B3층 (2시간 무료)<br></br>
              경기도 광명시 광명역로 28<br></br>
              (광명센트럴자이 오피스텔) 입력<br></br><br></br>
              제2주차장)<br></br>
              파크자이 오피스텔 주차장 B2층 (2시간 무료)<br></br>
              경기도 광명시 광명역로 26<br></br>
              (광명 파크자이 오피스텔) 입력<br></br><br></br>

            </div>
          </div>
          <div className="absolute top-2/3 w-auto">

          </div>
        </div>

        <div className="relative snap-center snap-always min-h-svh min-w-full flex justify-center items-center bg-white bg-cover bg-center">
          <h1 className="absolute top-20 text-2xl font-Hahmlet text-gray-700">
            참석여부 알리기
          </h1>
          <a className="absolute top-32 text-1xl font-Hahmlet rounded-xl p-2 text-gray-700 border border-gray-400"
            href="https://forms.gle/S2SnGE7jT2SuxhF68"
            target="_blank"
            rel="noopener noreferrer"
          >
            알리기
          </a>

          <div className="absolute top-1/3 font-Hahmlet flex flex-col items-center">
            <h1 className="text-2xl font-Hahmlet text-gray-700">
              마음 전하실 곳
            </h1>
            <h1 className="text-1xl font-Hahmlet m-5 text-gray-700 text-center">
              참석이 어려우신 분들을 위해<br></br>
              계좌번호를 기재하였습니다.<br></br>
              너그러운 마음으로 양해 부탁드립니다.
            </h1>
            <table className="table-auto bg-gray-200 border-separate text-gray-700 border-gray-400 border-spacing-1 text-xs rounded border w-11/12 m-5">
              <tbody>
                <tr>
                  <td className="text-center">신랑</td>
                  <td>이성연</td>
                  <td>카카오뱅크</td>
                  <td>3333-10-5382056</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("3333105382056")}>복사</button></td>
                </tr>
                <tr>
                  <td className="text-center">부</td>
                  <td>이영우</td>
                  <td>SC제일은행</td>
                  <td>600-20-373733</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("60020373733")}>복사</button></td>
                </tr>
                <tr>
                  <td className="text-center">모</td>
                  <td>신신숙</td>
                  <td>국민은행</td>
                  <td>879802-93-115438</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("87980293115438")}>복사</button></td>
                </tr>
              </tbody>
            </table>

            <table class="table-auto bg-gray-200 border-separate text-gray-700 border-gray-400 border-spacing-1 text-xs rounded border w-11/12 m-5">
              <tbody>
                <tr>
                  <td className="text-center">신부</td>
                  <td>김한은</td>
                  <td>카카오뱅크</td>
                  <td>3333-28-6191015</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("3333286191015")}>복사</button></td>
                </tr>
                <tr>
                  <td className="text-center">부</td>
                  <td>김규백</td>
                  <td>농협</td>
                  <td>702076-52-131271</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("70207652131271")}>복사</button></td>
                </tr>
                <tr>
                  <td className="text-center">모</td>
                  <td>김영정</td>
                  <td>대구은행</td>
                  <td>009-08-312442</td>
                  <td className="border border-gray-400 rounded-lg text-center">
                    <button className="px-1" onClick={() => copyText("00908312442")}>복사</button></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <div className="relative overflow-y-auto snap-center snap-always min-h-svh min-w-full flex flex-col justify-center items-center bg-white bg-cover bg-center">
          <div className="absolute top-20 text-center">
            <h1 className="text-3xl font-Hahmlet font-bold text-gray-700">방명록</h1>

          </div>
          <div className='absolute top-30 max-h-6/10 w-full overflow-y-auto text-black'>
            <div className="mx-10">
              {/* 이름과 내용을 입력하는 댓글창 */}
            </div>
          </div>

        </div>

        {/* 
        <footer className='relative snap-center snap-always mt-auto bottom-0 text-xm text-black'>
          <p>&copy; 2024 joshuajonghankim. All rights reserved.</p>
        </footer>
        */}


      </div>

      {/* Speaker Image */}
      <div className="absolute right-3 top-3">
        {/* isPlaying 상태에 따라 이미지 변경 */}
        <button onClick={toggleMusic}>
          {isPlaying ? (
            <Image
              src="/images/speaker-pause.png"
              alt="Pause"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/images/speaker-on.png"
              alt="Play"
              width={30}
              height={30}
            />
          )}
        </button>
      </div>

      {/* audio 요소 추가 */}
      <audio ref={audioRef} src="/music/In-your-heart[1.2].m4a" type="audio/mpeg" />

    </main>
  );
}
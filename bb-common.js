/* ============================================================
   BidBuy Renewal common shell
   - Standard header for index preview pages
   - Left / right drawers matched to mobile_main.html structure
   - Login state shared through localStorage
   ============================================================ */
(function () {
  'use strict';

  var LOGIN_KEY = 'bb_logged_in';

  function isLoggedIn() {
    return localStorage.getItem(LOGIN_KEY) === '1';
  }

  var css = [
    'body{min-width:1280px !important}',

    '.bbh-header{background:#fff;border-bottom:1px solid #E0E4EB;position:sticky;top:0;z-index:900;box-shadow:0 1px 4px rgba(0,0,0,.06);font-family:"Apple SD Gothic Neo","Helvetica Neue","Malgun Gothic",sans-serif;font-size:14px;color:#1A1A2E}',
    '.bbh-hdr{max-width:1440px;margin:0 auto;padding:0 24px;height:56px;display:flex;align-items:center;gap:16px}',
    '.bbh-menu{display:flex;flex-direction:column;gap:4.5px;padding:8px;border-radius:7px;cursor:pointer;background:none;border:none;margin-right:12px;transition:background .15s;flex-shrink:0}',
    '.bbh-menu:hover{background:#F5F7FA}',
    '.bbh-menu span{display:block;width:17px;height:2px;background:#1A1A2E;border-radius:1px}',
    '.bbh-logo{display:flex;align-items:center;flex-shrink:0;flex:1;text-decoration:none}',
    '.bbh-logo img{display:block;width:100px;height:auto}',
    '.bbh-search{flex:0 0 520px;display:flex;border:1.5px solid #E0E4EB;border-radius:8px;overflow:hidden;transition:border-color .2s}',
    '.bbh-search:focus-within{border-color:#E8385A}',
    '.bbh-search input{flex:1;border:none;background:#F5F7FA;padding:10px 14px;font-size:14px;font-family:inherit;outline:none;min-width:0}',
    '.bbh-search button{background:#E8385A;color:#fff;border:none;padding:0 20px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px}',
    '.bbh-search button:hover{background:#C42F4C}',
    '.bbh-right{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:4px}',
    '.bbh-ibtn{display:flex;flex-direction:column;align-items:center;gap:2px;padding:7px 10px;border-radius:8px;cursor:pointer;color:#666680;font-size:10px;border:none;background:none;font-family:inherit;position:relative}',
    '.bbh-ibtn:hover{background:#F5F7FA}',
    '.bbh-ibtn i{font-size:17px}',
    '.bbh-badge{position:absolute;top:4px;right:4px;background:#E8385A;color:#fff;font-size:8px;font-weight:700;min-width:14px;height:14px;border-radius:7px;display:flex;align-items:center;justify-content:center;padding:0 2px}',
    '.bbh-btn-login{background:#E8385A;color:#fff;border:none;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s;white-space:nowrap}',
    '.bbh-btn-login:hover{background:#C42F4C}',
    '.bbh-btn-join{background:#fff;color:#666680;border:1.5px solid #E0E4EB;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap;margin-right:6px}',
    '.bbh-btn-join:hover{border-color:#E8385A;color:#E8385A}',
    '.bbh-user{display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;cursor:pointer;border:none;background:none;font-family:inherit;transition:background .15s}',
    '.bbh-user:hover{background:#F5F7FA}',
    '.bbh-av{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#E8385A,#F5A623);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;flex-shrink:0}',
    '.bbh-nm{font-size:13px;font-weight:700;color:#1A1A2E;line-height:1.2;text-align:left;white-space:nowrap}',
    '.bbh-gr{display:inline-block;background:#FFF3E0;color:#F5A623;font-size:9px;font-weight:700;padding:1px 6px;border-radius:8px;margin-top:2px}',
    '.bbh-chev{margin-left:2px;font-size:11px;color:#9aa3b2;transition:transform .18s}',
    '.bbh-user.open .bbh-chev{transform:rotate(180deg)}',

    '.bbd-ov{position:fixed;inset:0;background:rgba(0,0,0,0);pointer-events:none;transition:background .3s;z-index:1000}',
    '.bbd-ov.open{background:rgba(0,0,0,.45);pointer-events:all}',
    '.bbd{position:fixed;top:0;bottom:0;left:-100%;width:88%;max-width:340px;z-index:1001;background:#fff;overflow-y:auto;scrollbar-width:none;font-family:"Apple SD Gothic Neo","Helvetica Neue","Malgun Gothic",sans-serif;font-size:14px;color:#1A1A2E;transition:left .3s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;box-shadow:4px 0 20px rgba(0,0,0,.12)}',
    '.bbd::-webkit-scrollbar{display:none}',
    '.bbd.open{left:0}',
    '.bbu{position:fixed;top:64px;right:24px;width:320px;max-width:calc(100vw - 32px);max-height:calc(100vh - 88px);z-index:1002;background:#fff;overflow-y:auto;scrollbar-width:none;font-family:"Apple SD Gothic Neo","Helvetica Neue","Malgun Gothic",sans-serif;font-size:14px;color:#1A1A2E;border-radius:16px;box-shadow:0 16px 40px rgba(17,24,39,.18);opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .18s ease,transform .18s ease,visibility .18s}',
    '.bbu::-webkit-scrollbar{display:none}',
    '.bbu.open{opacity:1;visibility:visible;transform:translateY(0)}',

    '.bbd-head{display:flex;align-items:center;justify-content:space-between;min-height:58px;padding:12px 16px;border-bottom:1px solid #ECEFF3;background:#fff}',
    '.bbd-user-mini{display:flex;align-items:center;gap:10px}',
    '.bbd-uav{width:38px;height:38px;border-radius:50%;background:#FFE7EF;color:#E8385A;display:grid;place-items:center;font-size:18px;font-weight:800}',
    '.bbd-uname{font-size:15px;font-weight:700;color:#1A1A2E}',
    '.bbd-ugrade{font-size:11px;color:#666680;margin-top:2px}',
    '.bbd-guest-card{padding:14px 16px 16px;background:#FFF8F5;border-bottom:1px solid #E5E7EB}',
    '.bbd-guest-title{font-size:16px;font-weight:800;color:#111827;margin-bottom:4px}',
    '.bbd-guest-copy{font-size:12px;color:#6B7280;line-height:1.45;margin-bottom:12px}',
    '.bbd-login-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
    '.bbd-action-btn{height:36px;border-radius:10px;border:1px solid #E8385A;background:#E8385A;color:#fff;font-size:12px;font-weight:800;font-family:inherit;cursor:pointer}',
    '.bbd-action-btn.secondary{background:#fff;color:#4B5563;border-color:#D9E0E9}',
    '.bbd-close{width:32px;height:32px;border:0;border-radius:50%;background:#F7F8FA;color:#111827;font-size:18px;font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:inherit}',
    '.bbd-close:hover{background:#EEF1F5}',
    '.bbd-sec{padding:0;border-bottom:1px solid #ECEFF3;background:#fff}',
    '.bbd-sec:last-child{border-bottom:none}',
    '.bbd-sec-title{height:38px;padding:0 16px;display:flex;align-items:center;background:#F5F6F8;color:#7D8796;font-size:12px;font-weight:800}',
    '.bbd-quick,.bbd-cat-list,.bbd-guide-list{display:flex;flex-direction:column;padding:6px 0}',
    '.bbd-quick-item,.bbd-cat-item,.bbd-guide-item{min-height:56px;display:flex;align-items:center;gap:14px;padding:8px 16px 8px 24px;color:#111827;cursor:pointer;text-decoration:none}',
    '.bbd-quick-icon,.bbd-guide-icon{width:22px;display:flex;align-items:center;justify-content:center;color:#000;font-size:16px;flex-shrink:0}',
    '.bbd-quick-text,.bbd-guide-text{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}',
    '.bbd-quick-label,.bbd-guide-label{font-size:15px;color:#111827;font-weight:800;line-height:1.2}',
    '.bbd-quick-desc,.bbd-guide-desc{font-size:11px;color:#8B94A3;font-weight:500;line-height:1.25}',
    '.bbd-cat-flag{width:20px;flex-shrink:0;color:#000;font-size:12px;font-weight:900;text-align:left}',
    '.bbd-cat-label{flex:1;color:#111827;font-size:15px;font-weight:800}',
    '.bbd-cat-arrow{font-size:12px;color:#999BAA}',
    '.bbd-link-grid{display:grid;grid-template-columns:repeat(2,1fr);row-gap:14px;column-gap:24px;padding:14px 16px}',
    '.bbd-link-grid a{font-size:14px;color:#666680;text-decoration:none}',
    '.bbd-cs-card{margin:22px 26px 34px;padding:18px 14px;background:#fcfcfd;text-align:center}',
    '.bbd-cs-tel{color:#1A3C6E;font-family:Roboto,sans-serif;font-size:26px;font-weight:900}',
    '.bbd-cs-time{margin:8px 0 16px;color:#7b8494;font-size:11px}',
    '.bbd-cs-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
    '.bbd-cs-actions button{height:34px;border:1px solid #d9e0e9;border-radius:8px;background:#fff;color:#1f2530;font-size:12px;font-weight:900;font-family:inherit}',
    '.bbd-cs-actions button:first-child{border-color:#E8385A;background:#E8385A;color:#fff}',

    '.bbu-head{padding:20px 16px 24px;background:#fff8f5;display:flex;align-items:center;gap:12px}',
    '.bbu-avatar{width:46px;height:46px;flex:0 0 auto;display:grid;place-items:center;border-radius:50%;background:#ffe6ef;color:#E8385A;font-size:15px;font-weight:900}',
    '.bbu-head-text{display:flex;flex-direction:column;gap:2px;min-width:0}',
    '.bbu-name{color:#111827;font-size:16px;font-weight:900}',
    '.bbu-role{color:#E8385A;font-size:12px;font-weight:800}',
    '.bbu-asset-box{display:grid;grid-template-columns:1fr 1fr;margin:-14px 16px 0;border:1px solid #d9e0e9;border-radius:10px;background:#fff;overflow:hidden;box-shadow:0 2px 8px rgba(17,24,39,.06);position:relative;z-index:1}',
    '.bbu-asset-box div{padding:10px 14px}',
    '.bbu-asset-box div+div{border-left:1px solid #d9e0e9}',
    '.bbu-asset-box span{display:block;color:#a4acb8;font-size:10px;font-weight:700}',
    '.bbu-asset-box strong{display:block;margin-top:2px;color:#151b29;font-size:17px;font-weight:900}',
    '.bbu-grade-note{margin:12px 16px;color:#9aa3b2;font-size:12px;font-weight:600;text-align:center}',
    '.bbu-status-grid{display:grid;grid-template-columns:repeat(3,1fr);margin:0 16px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#fff}',
    '.bbu-status-grid div{min-height:64px;display:grid;place-items:center;align-content:center;gap:4px;text-align:center}',
    '.bbu-status-grid div+div{border-left:1px solid #e5e7eb}',
    '.bbu-status-grid strong{color:#151b29;font-family:Roboto,sans-serif;font-size:22px;line-height:1;font-weight:900}',
    '.bbu-status-grid span{color:#9aa3b2;font-size:10px;font-weight:700}',
    '.bbu-menu-list{padding:6px 0;border-top:1px solid #eee}',
    '.bbu-menu-item{min-height:46px;width:100%;padding:0 18px;display:flex;align-items:center;gap:14px;color:#1A1A2E;font-size:14px;font-weight:700;border:0;background:#fff;text-align:left;text-decoration:none;font-family:inherit;cursor:pointer}',
    '.bbu-menu-item:hover{background:#F9FAFB}',
    '.bbu-menu-icon,.bbu-emoji{width:20px;text-align:center;font-size:16px;color:#666680;flex:0 0 auto}',
    '.bbu-menu-item.logout{margin-top:4px;border-top:1px solid #eee;color:#9aa3b2;font-weight:700}',
    '.new-n{color:#E8385A;font-family:Roboto,sans-serif;font-size:9px;font-weight:900;line-height:1;vertical-align:super;margin-left:2px}'
  ].join('\n');

  function headerHTML() {
    if (isLoggedIn()) {
      return (
        '<div class="bbh-hdr">' +
          '<button class="bbh-menu" type="button" aria-label="메뉴 열기" onclick="openDrawer()"><span></span><span></span><span></span></button>' +
          '<a href="web_main.html" class="bbh-logo"><img src="Bidbuy logo.png" alt="Bidbuy World Auction Agency"></a>' +
          '<form class="bbh-search" role="search" action="web_totalsearch.html" method="get"><input type="search" name="q" placeholder="키워드 또는 URL을 입력하세요" aria-label="검색어 입력"><button type="submit"><i class="fas fa-search"></i> <span>AI 검색</span></button></form>' +
          '<div class="bbh-right">' +
            '<button class="bbh-ibtn" type="button" aria-label="알림"><i class="far fa-bell"></i><span class="bbh-badge">3</span><span>알림</span></button>' +
            '<button class="bbh-ibtn" type="button" aria-label="장바구니"><i class="fas fa-shopping-cart"></i><span>장바구니</span></button>' +
            '<button class="bbh-user" id="bbhUserTrig" type="button" aria-label="회원 메뉴" aria-haspopup="true" aria-expanded="false" onclick="toggleUserDrawer()"><span class="bbh-av">홍</span><span><span class="bbh-nm">홍길동님</span><br><span class="bbh-gr">PREMIUM</span></span><i class="fas fa-chevron-down bbh-chev" aria-hidden="true"></i></button>' +
          '</div>' +
        '</div>'
      );
    }

    return (
      '<div class="bbh-hdr">' +
        '<button class="bbh-menu" type="button" aria-label="메뉴 열기" onclick="openDrawer()"><span></span><span></span><span></span></button>' +
        '<a href="web_main.html" class="bbh-logo"><img src="Bidbuy logo.png" alt="Bidbuy World Auction Agency"></a>' +
        '<form class="bbh-search" role="search" action="web_totalsearch.html" method="get"><input type="search" name="q" placeholder="키워드 또는 URL을 입력하세요" aria-label="검색어 입력"><button type="submit"><i class="fas fa-search"></i> <span>AI 검색</span></button></form>' +
        '<div class="bbh-right"><button class="bbh-btn-join" type="button">회원가입</button><button class="bbh-btn-login" type="button" onclick="doLogin()">로그인</button></div>' +
      '</div>'
    );
  }

  function leftDrawerHTML() {
    var header = isLoggedIn()
      ? '<div id="drUserHd" class="bbd-head"><div class="bbd-user-mini"><div class="bbd-uav"><i class="fas fa-crown" aria-hidden="true"></i></div><div><div class="bbd-uname">홍길동님</div><div class="bbd-ugrade">PREMIUM 회원</div></div></div><button class="bbd-close" type="button" aria-label="메뉴 닫기" onclick="closeDrawer()">×</button></div>'
      : '<div id="drGuestHd" class="bbd-head"><span></span><button class="bbd-close" type="button" aria-label="메뉴 닫기" onclick="closeDrawer()">×</button></div><div id="drGuestPanel" class="bbd-guest-card"><div class="bbd-guest-title">비드바이 로그인</div><div class="bbd-guest-copy">로그인하고 입찰 현황, 마일리지, 관심 상품을 빠르게 확인하세요.</div><div class="bbd-login-actions"><button class="bbd-action-btn" type="button" onclick="doLogin();closeDrawer()">로그인</button><button class="bbd-action-btn secondary" type="button">회원가입</button></div></div>';

    return (
      header +
      '<div class="bbd-sec"><div class="bbd-sec-title">빠른 메뉴</div><div class="bbd-quick">' +
        '<a class="bbd-quick-item" href="#"><span class="bbd-quick-icon"><i class="fas fa-calculator"></i></span><span class="bbd-quick-text"><span class="bbd-quick-label">비용 계산기</span><span class="bbd-quick-desc">예상 소요 비용 계산기</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-quick-item" href="web_bundle_shipping_management.html"><span class="bbd-quick-icon"><i class="fas fa-box"></i></span><span class="bbd-quick-text"><span class="bbd-quick-label">입고/보관중인 물건 조회</span><span class="bbd-quick-desc">개인 입고 물품 확인</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-quick-item" href="web_bundle_shipping_management_2.html"><span class="bbd-quick-icon"><i class="fas fa-truck-fast"></i></span><span class="bbd-quick-text"><span class="bbd-quick-label">출고 배송중</span><span class="bbd-quick-desc">센터별 출고 일정 확인</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
      '</div></div>' +
      '<div class="bbd-sec"><div class="bbd-sec-title">카테고리</div><div class="bbd-cat-list">' +
        '<a class="bbd-cat-item" href="web_sub_main.html"><span class="bbd-cat-flag">JP</span><span class="bbd-cat-label">야후옥션</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_purchase_merukari.html"><span class="bbd-cat-flag">M</span><span class="bbd-cat-label">메루카리</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_purchase_store.html"><span class="bbd-cat-flag">RA</span><span class="bbd-cat-label">라쿠텐</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_purchase_url.html"><span class="bbd-cat-flag">JP</span><span class="bbd-cat-label">야후쇼핑</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_purchase_store.html"><span class="bbd-cat-flag">MA</span><span class="bbd-cat-label">라쿠마</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub_main.html"><span class="bbd-cat-flag">US</span><span class="bbd-cat-label">미국이베이</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub_main.html"><span class="bbd-cat-flag">UK</span><span class="bbd-cat-label">영국이베이</span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
      '</div></div>' +
      '<div class="bbd-sec"><div class="bbd-sec-title">이용가이드</div><div class="bbd-guide-list">' +
        '<a class="bbd-guide-item" href="#"><span class="bbd-guide-icon"><i class="fas fa-book-open"></i></span><span class="bbd-guide-text"><span class="bbd-guide-label">경매대행 이용안내</span><span class="bbd-guide-desc">서비스 이용 절차 확인</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-guide-item" href="#"><span class="bbd-guide-icon"><i class="fas fa-shopping-bag"></i></span><span class="bbd-guide-text"><span class="bbd-guide-label">구매대행 이용안내</span><span class="bbd-guide-desc">구매대행 진행 방식 확인</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
        '<a class="bbd-guide-item" href="#"><span class="bbd-guide-icon"><i class="fas fa-coins"></i></span><span class="bbd-guide-text"><span class="bbd-guide-label">수수료 및 관부가세</span><span class="bbd-guide-desc">예상 비용과 세금 안내</span></span><i class="fas fa-chevron-right bbd-cat-arrow"></i></a>' +
      '</div></div>' +
      '<div class="bbd-sec" style="border-bottom:none"><div class="bbd-sec-title">고객센터</div><div class="bbd-link-grid"><a href="#">공지사항<sup class="new-n" aria-label="새 소식">N</sup></a><a href="#">자주하는질문</a><a href="web_qna_form.html">1:1문의<sup class="new-n" aria-label="새 답변">N</sup></a><a href="#">커뮤니티</a></div></div>' +
      '<div class="bbd-cs-card"><div class="bbd-cs-tel">1544-5224</div><p class="bbd-cs-time">평일 AM 10:00 - PM 17:00 (점심 PM 12:30 - 13:30)</p><div class="bbd-cs-actions"><button type="button" onclick="location.href=\'web_qna_form.html\'">1:1 문의</button><button type="button">FAQ</button><button type="button">공지사항</button></div></div>' +
      '<div style="height:24px"></div>'
    );
  }

  function rightDrawerHTML() {
    return (
      '<div class="bbu-head"><div class="bbu-avatar">홍길</div><div class="bbu-head-text"><strong class="bbu-name">홍길동님</strong><span class="bbu-role">PREMIUM 회원</span></div></div>' +
      '<div class="bbu-asset-box"><div><span>마일리지</span><strong>4,500원</strong></div><div><span>예치금</span><strong>29,870원</strong></div></div>' +
      '<p class="bbu-grade-note">다음 등급 정보를 준비 중입니다.</p>' +
      '<div class="bbu-status-grid"><div><strong>3</strong><span>입찰 진행 중</span></div><div><strong>1</strong><span>1차 결제 대기</span></div><div><strong>0</strong><span>2차 결제 대기</span></div></div>' +
      '<nav class="bbu-menu-list">' +
        userMenuLink('fa-user', '마이페이지', 'web_mypage.html') +
        userMenuLink('fa-gavel', '나의 경매', 'web_mypage.html') +
        userMenuLink('fa-bag-shopping', '구매대행 내역', 'web_mypage.html') +
        userMenuLink('fa-box-archive', '묶음 배송 관리', 'web_bundle_shipping_management.html') +
        userMenuLink('fa-heart', '관심 물품', '#') +
        userMenuLink('fa-gear', '회원 정보 설정', '#') +
        '<button class="bbu-menu-item logout" type="button" onclick="toggleLogin();closeUserDrawer()"><span class="bbu-menu-icon"><i class="fas fa-right-from-bracket" aria-hidden="true"></i></span><span>로그아웃</span></button>' +
      '</nav>'
    );
  }

  function userMenuLink(icon, label, href) {
    return '<a class="bbu-menu-item" href="' + href + '"><span class="bbu-menu-icon"><i class="fas ' + icon + '" aria-hidden="true"></i></span><span>' + label + '</span></a>';
  }

  function render() {
    if (!document.getElementById('bbCommonCss')) {
      var style = document.createElement('style');
      style.id = 'bbCommonCss';
      style.textContent = css;
      document.head.appendChild(style);
    }
    if (!document.querySelector('link[href*="font-awesome"]')) {
      var fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fa);
    }

    var header = document.getElementById('bbCommonHeader');
    if (!header) {
      document.querySelectorAll('header, .topbar').forEach(function (el) {
        if (el.id !== 'bbCommonHeader') el.remove();
      });
      header = document.createElement('header');
      header.id = 'bbCommonHeader';
      header.className = 'bbh-header';
      document.body.insertBefore(header, document.body.firstChild);
    }
    header.innerHTML = headerHTML();

    var leftOv = ensureNode('bbDrawerOv', 'div', 'bbd-ov');
    var left = ensureNode('bbDrawer', 'aside', 'bbd');
    var right = ensureNode('bbUserDrawer', 'aside', 'bbu');

    leftOv.onclick = closeDrawer;
    left.innerHTML = leftDrawerHTML();
    right.innerHTML = rightDrawerHTML();

    // 페이지별 로그인 의존 UI(입찰 패널 등)가 동기화할 수 있도록 알림
    document.dispatchEvent(new CustomEvent('bb:login', { detail: { loggedIn: isLoggedIn() } }));
  }

  function ensureNode(id, tag, className) {
    var node = document.getElementById(id);
    if (!node) {
      node = document.createElement(tag);
      node.id = id;
      document.body.appendChild(node);
    }
    node.className = className;
    return node;
  }

  window.bbIsLoggedIn = isLoggedIn;
  window.doLogin = function () {
    localStorage.setItem(LOGIN_KEY, '1');
    render();
  };
  window.doLogout = function () {
    localStorage.removeItem(LOGIN_KEY);
    closeUserDrawer();
    closeDrawer();
    render();
  };
  window.toggleLogin = function () {
    if (isLoggedIn()) window.doLogout();
    else window.doLogin();
  };
  window.openDrawer = function () {
    closeUserDrawer();
    document.getElementById('bbDrawerOv').classList.add('open');
    document.getElementById('bbDrawer').classList.add('open');
  };
  window.closeDrawer = closeDrawer;
  window.openUserDrawer = function () {
    if (!isLoggedIn()) return;
    closeDrawer();
    document.getElementById('bbUserDrawer').classList.add('open');
    var trig = document.getElementById('bbhUserTrig');
    if (trig) { trig.classList.add('open'); trig.setAttribute('aria-expanded', 'true'); }
  };
  window.closeUserDrawer = closeUserDrawer;
  window.toggleUserDrawer = function () {
    var right = document.getElementById('bbUserDrawer');
    if (right && right.classList.contains('open')) closeUserDrawer();
    else window.openUserDrawer();
  };

  function closeDrawer() {
    document.getElementById('bbDrawerOv')?.classList.remove('open');
    document.getElementById('bbDrawer')?.classList.remove('open');
  }

  function closeUserDrawer() {
    document.getElementById('bbUserDrawer')?.classList.remove('open');
    var trig = document.getElementById('bbhUserTrig');
    if (trig) { trig.classList.remove('open'); trig.setAttribute('aria-expanded', 'false'); }
  }

  document.addEventListener('click', function (e) {
    var right = document.getElementById('bbUserDrawer');
    var trig = document.getElementById('bbhUserTrig');
    if (!right || !right.classList.contains('open')) return;
    if (right.contains(e.target) || (trig && trig.contains(e.target))) return;
    closeUserDrawer();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeUserDrawer();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

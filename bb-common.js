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

    '.bbd-ov,.bbu-ov{position:fixed;inset:0;background:rgba(0,0,0,0);pointer-events:none;transition:background .3s}',
    '.bbd-ov{z-index:1000}',
    '.bbu-ov{z-index:1002}',
    '.bbd-ov.open,.bbu-ov.open{background:rgba(0,0,0,.45);pointer-events:all}',
    '.bbd,.bbu{position:fixed;top:0;bottom:0;background:#fff;overflow-y:auto;scrollbar-width:none;font-family:"Apple SD Gothic Neo","Helvetica Neue","Malgun Gothic",sans-serif;font-size:14px;color:#1A1A2E}',
    '.bbd::-webkit-scrollbar,.bbu::-webkit-scrollbar{display:none}',
    '.bbd{left:-100%;width:88%;max-width:340px;z-index:1001;transition:left .3s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;box-shadow:4px 0 20px rgba(0,0,0,.12);border-top-right-radius:16px;border-bottom-right-radius:16px}',
    '.bbd.open{left:0}',
    '.bbu{right:-105%;width:84%;max-width:300px;z-index:1003;transition:right .28s cubic-bezier(.4,0,.2,1)}',
    '.bbu.open{right:0}',

    '.bbd-head{display:flex;align-items:center;justify-content:space-between;padding:18px 16px 16px;border-bottom:1px solid #D8D8DE}',
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
    '.bbd-sec{padding:14px 0 10px;border-bottom:1px solid #D8D8DE}',
    '.bbd-sec:last-child{border-bottom:none}',
    '.bbd-sec-title{padding:0 16px 14px;color:#1A1A2E;font-size:13px;font-weight:800}',
    '.bbd-quick{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:0 8px}',
    '.bbd-quick-item{display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px 4px 14px;cursor:pointer;text-decoration:none}',
    '.bbd-quick-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;color:#E8385A}',
    '.bbd-quick-label{font-size:13px;color:#666680;word-break:keep-all;text-align:center}',
    '.bbd-cat-list{padding:0 0 2px}',
    '.bbd-cat-item{display:flex;align-items:center;gap:12px;padding:15px 16px;border-top:1px solid #D8D8DE;font-size:15px;color:#1A1A2E;cursor:pointer;text-decoration:none}',
    '.bbd-cat-item:first-child{border-top:none}',
    '.bbd-cat-flag{width:30px;flex-shrink:0;color:#1A1A2E;font-size:14px;font-weight:700}',
    '.bbd-cat-label{flex:1}',
    '.bbd-cat-arrow{font-size:12px;color:#999BAA}',
    '.bbd-link-grid{display:grid;grid-template-columns:repeat(2,1fr);row-gap:14px;column-gap:24px;padding:0 16px 14px}',
    '.bbd-link-grid a{font-size:14px;color:#666680;text-decoration:none}',
    '.bbd-cs-card{margin:22px 26px 34px;padding:18px 14px;background:#fcfcfd;text-align:center}',
    '.bbd-cs-tel{color:#1A3C6E;font-family:Roboto,sans-serif;font-size:26px;font-weight:900}',
    '.bbd-cs-time{margin:8px 0 16px;color:#7b8494;font-size:11px}',
    '.bbd-cs-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
    '.bbd-cs-actions button{height:34px;border:1px solid #d9e0e9;border-radius:8px;background:#fff;color:#1f2530;font-size:12px;font-weight:900;font-family:inherit}',
    '.bbd-cs-actions button:first-child{border-color:#E8385A;background:#E8385A;color:#fff}',

    '.bbu-head{padding:18px 14px 12px;background:#fff8f5;border-bottom:1px solid #efe6e2}',
    '.bbu-member-row{display:flex;align-items:center;gap:12px}',
    '.bbu-crown{width:48px;height:48px;display:grid;place-items:center;border-radius:50%;background:#ffe6ef;font-size:26px;flex:0 0 auto}',
    '.bbu-name{display:block;color:#111827;font-size:18px;font-weight:900}',
    '.bbu-vip-chip{display:inline-flex;margin-top:5px;padding:2px 12px;border-radius:999px;background:#E8385A;color:#fff;font-size:11px;font-weight:900}',
    '.bbu-vip-copy{margin:13px 0 4px;color:#E8385A;font-size:11px;font-weight:900}',
    '.bbu-vip-bar{height:5px;border-radius:999px;background:#eee2de;overflow:hidden}',
    '.bbu-vip-bar span{display:block;width:100%;height:100%;background:#E8385A}',
    '.bbu-asset-box{display:grid;grid-template-columns:1fr 1fr;margin-top:12px;border:1px solid #d9e0e9;border-radius:8px;background:#fff;overflow:hidden}',
    '.bbu-asset-box div{padding:8px 12px}',
    '.bbu-asset-box div+div{border-left:1px solid #d9e0e9}',
    '.bbu-asset-box span{display:block;color:#a4acb8;font-size:10px;font-weight:700}',
    '.bbu-asset-box strong{display:block;color:#151b29;font-size:16px;font-weight:900}',
    '.bbu-status-grid{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid #e5e7eb;background:#fff}',
    '.bbu-status-grid div{min-height:70px;display:grid;place-items:center;align-content:center;gap:4px;text-align:center}',
    '.bbu-status-grid div+div{border-left:1px solid #e5e7eb}',
    '.bbu-status-grid strong{color:#151b29;font-family:Roboto,sans-serif;font-size:26px;line-height:1;font-weight:900}',
    '.bbu-status-grid div:nth-child(2) strong{color:#E8385A}',
    '.bbu-status-grid span{color:#9aa3b2;font-size:10px;font-weight:700}',
    '.bbu-menu-list{padding:0 0 12px}',
    '.bbu-menu-item{min-height:45px;padding:0 18px 0 14px;display:flex;align-items:center;gap:12px;color:#111827;font-size:14px;font-weight:900;border-bottom:0}',
    'button.bbu-menu-item{width:100%;border-top:0;border-right:0;border-left:0;background:#fff;text-align:left;font-family:inherit;cursor:pointer}',
    '.bbu-menu-icon,.bbu-emoji{width:22px;text-align:center;font-size:17px;flex:0 0 auto}',
    '.bbu-chev{margin-left:auto;color:#a8b0bd;font-weight:700;font-size:17px;line-height:1}',
    '.bbu-menu-panel{display:none;padding:0 0 8px 56px}',
    '.bbu-menu-section.is-open .bbu-menu-panel{display:grid;gap:0}',
    '.bbu-menu-link{min-height:33px;display:flex;align-items:center;color:#666b75;font-size:14px;font-weight:500;text-decoration:none}',
    '.bbu-menu-link.danger{color:#8f949f}',
    '.bbu-menu-item.logout{margin-top:6px;border-top:1px solid #e5e7eb;color:#9aa3b2;font-weight:700}',
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
            '<button class="bbh-user" type="button" aria-label="회원 메뉴" onclick="openUserDrawer()"><span class="bbh-av">한</span><span><span class="bbh-nm">이한나님</span><br><span class="bbh-gr">PREMIUM</span></span></button>' +
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
      ? '<div id="drUserHd" class="bbd-head"><div class="bbd-user-mini"><div class="bbd-uav"><i class="fas fa-crown" aria-hidden="true"></i></div><div><div class="bbd-uname">이한나님</div><div class="bbd-ugrade">PREMIUM 회원</div></div></div></div>'
      : '<div id="drGuestHd" class="bbd-head"></div><div id="drGuestPanel" class="bbd-guest-card"><div class="bbd-guest-title">비드바이 로그인</div><div class="bbd-guest-copy">로그인하고 입찰 현황, 마일리지, 관심 상품을 빠르게 확인하세요.</div><div class="bbd-login-actions"><button class="bbd-action-btn" type="button" onclick="doLogin();closeDrawer()">로그인</button><button class="bbd-action-btn secondary" type="button">회원가입</button></div></div>';

    return (
      header +
      '<div class="bbd-sec"><div class="bbd-quick">' +
        '<a class="bbd-quick-item" href="web_bundle_shipping_management.html"><div class="bbd-quick-icon"><i class="fas fa-truck-fast"></i></div><div class="bbd-quick-label">배송관리</div></a>' +
        '<a class="bbd-quick-item" href="web_mileage.html"><div class="bbd-quick-icon"><i class="fas fa-won-sign"></i></div><div class="bbd-quick-label">MY혜택</div></a>' +
        '<a class="bbd-quick-item" href="#"><div class="bbd-quick-icon"><i class="fas fa-file-invoice"></i></div><div class="bbd-quick-label">관심항목</div></a>' +
        '<a class="bbd-quick-item" href="web_mypage.html"><div class="bbd-quick-icon"><i class="fas fa-calendar-check"></i></div><div class="bbd-quick-label">마이페이지</div></a>' +
      '</div></div>' +
      '<div class="bbd-sec"><div class="bbd-sec-title">카테고리</div><div class="bbd-cat-list">' +
        '<a class="bbd-cat-item" href="web_sub main.html"><span class="bbd-cat-flag">JP</span><span class="bbd-cat-label">일본야후경매</span><i class="fas fa-chevron-down bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub main.html"><span class="bbd-cat-flag">US</span><span class="bbd-cat-label">미국이베이경매</span><i class="fas fa-chevron-down bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub main.html"><span class="bbd-cat-flag">GB</span><span class="bbd-cat-label">영국이베이경매</span><i class="fas fa-chevron-down bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub main.html"><span class="bbd-cat-flag">JP</span><span class="bbd-cat-label">일본메루카리</span><i class="fas fa-chevron-down bbd-cat-arrow"></i></a>' +
        '<a class="bbd-cat-item" href="web_sub main.html"><span class="bbd-cat-flag">JP</span><span class="bbd-cat-label">일본구매대행</span><i class="fas fa-chevron-down bbd-cat-arrow"></i></a>' +
      '</div></div>' +
      '<div class="bbd-sec"><div class="bbd-sec-title">이용가이드</div><div class="bbd-link-grid"><a href="#">초보자가이드</a><a href="#">수수료안내</a><a href="#">배송비안내</a><a href="#">관부가세안내</a></div></div>' +
      '<div class="bbd-sec" style="border-bottom:none"><div class="bbd-sec-title">고객센터</div><div class="bbd-link-grid"><a href="#">공지사항<sup class="new-n" aria-label="새 소식">N</sup></a><a href="#">자주하는질문</a><a href="web_qna_form.html">1:1문의<sup class="new-n" aria-label="새 답변">N</sup></a><a href="#">커뮤니티</a></div></div>' +
      '<div class="bbd-cs-card"><div class="bbd-cs-tel">1544-5224</div><p class="bbd-cs-time">평일 AM 10:00 - PM 17:00 (점심 PM 12:30 - 13:30)</p><div class="bbd-cs-actions"><button type="button" onclick="location.href=\'web_qna_form.html\'">1:1 문의</button><button type="button">FAQ</button><button type="button">공지사항</button></div></div>' +
      '<div style="height:24px"></div>'
    );
  }

  function rightDrawerHTML() {
    return (
      '<div class="bbu-head"><div class="bbu-member-row"><div class="bbu-crown"><i class="fas fa-crown" aria-hidden="true"></i></div><div><strong class="bbu-name">이한나 회원님</strong><span class="bbu-vip-chip">VIP</span></div></div><p class="bbu-vip-copy">VIP 등급 달성! 최고 혜택을 누리세요 🎉</p><div class="bbu-vip-bar"><span></span></div><div class="bbu-asset-box"><div><span>마일리지</span><strong>4,500원</strong></div><div><span>예치금</span><strong>29,870원</strong></div></div></div>' +
      '<div class="bbu-status-grid"><div><strong>3</strong><span>입찰 진행 중</span></div><div><strong>1</strong><span>1차 결제 대기</span></div><div><strong>0</strong><span>2차 결제 대기</span></div></div>' +
      '<nav class="bbu-menu-list">' +
        menuSection('mm-menu-trade', 'fa-gavel', '나의 거래 현황', [['web_mypage.html','거래 전체 목록'], ['web_mypage.html','경매 입찰/유찰'], ['web_mypage.html','구매 신청 목록']]) +
        menuSection('mm-menu-delivery', 'fa-truck-fast', '배송관리', [['web_bundle_shipping_management.html','배송신청/변경'], ['#','배송지 관리']]) +
        menuSection('mm-menu-favorites', 'fa-heart', '관심 항목 관리', [['#','관심 출품자'], ['#','관심 물품'], ['#','관심 키워드']]) +
        menuSection('mm-menu-benefit', 'fa-gift', 'MY 혜택', [['web_mileage.html','마일리지 / 쿠폰'], ['web_grade page.html','MY 등급']]) +
        menuSection('mm-menu-info', 'fa-user', '나의 정보관리', [['#','예치금 관리'], ['#','보증금 관리'], ['#','회원정보 수정'], ['#','비밀번호 변경'], ['#','회원 탈퇴', 'danger']]) +
        '<button class="bbu-menu-item logout" type="button" onclick="toggleLogin();closeUserDrawer()"><span class="bbu-emoji">🔒</span><span>로그아웃</span></button>' +
      '</nav>'
    );
  }

  function menuSection(id, icon, label, links) {
    var linkHtml = links.map(function (item) {
      var danger = item[2] ? ' danger' : '';
      return '<a class="bbu-menu-link' + danger + '" href="' + item[0] + '">' + item[1] + '</a>';
    }).join('');
    return (
      '<div class="bbu-menu-section">' +
        '<button class="bbu-menu-item bbu-menu-trigger" type="button" aria-expanded="false" aria-controls="' + id + '">' +
          '<span class="bbu-menu-icon"><i class="fas ' + icon + '" aria-hidden="true"></i></span><span>' + label + '</span><span class="bbu-chev"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>' +
        '</button>' +
        '<div class="bbu-menu-panel" id="' + id + '">' + linkHtml + '</div>' +
      '</div>'
    );
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
    var rightOv = ensureNode('bbUserDrawerOv', 'div', 'bbu-ov');
    var right = ensureNode('bbUserDrawer', 'aside', 'bbu');

    leftOv.onclick = closeDrawer;
    rightOv.onclick = closeUserDrawer;
    left.innerHTML = leftDrawerHTML();
    right.innerHTML = rightDrawerHTML();
    bindUserMenu();

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

  function bindUserMenu() {
    document.querySelectorAll('.bbu-menu-trigger').forEach(function (btn) {
      if (btn.dataset.bound === '1') return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var section = btn.closest('.bbu-menu-section');
        var isOpen = section && section.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(Boolean(isOpen)));
      });
    });
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
    document.getElementById('bbUserDrawerOv').classList.add('open');
    document.getElementById('bbUserDrawer').classList.add('open');
  };
  window.closeUserDrawer = closeUserDrawer;

  function closeDrawer() {
    document.getElementById('bbDrawerOv')?.classList.remove('open');
    document.getElementById('bbDrawer')?.classList.remove('open');
  }

  function closeUserDrawer() {
    document.getElementById('bbUserDrawerOv')?.classList.remove('open');
    document.getElementById('bbUserDrawer')?.classList.remove('open');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

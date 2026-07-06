/* ============================================================
   BidBuy Renewal mobile shared shell — phase 1
   - Left category drawer + right user-menu drawer, shared across
     mobile_*.html so drawer markup lives in one place instead of
     being copy-pasted per page.
   - Relies on each page's own <style> for .drawer/.user-drawer/etc
     (unchanged), this script only supplies markup + open/close +
     login-state wiring.
   - Header/search/notice bar stay page-specific for now (phase 2).
   ============================================================ */
(function () {
  'use strict';

  var LOGIN_KEY = 'bb_logged_in';

  function isLoggedIn() {
    return localStorage.getItem(LOGIN_KEY) === '1';
  }

  function leftDrawerHTML() {
    return (
      '<div id="drGuestHd" class="dr-head"></div>' +
      '<div id="drUserHd" class="dr-head" style="display:none">' +
        '<div class="dr-user-mini">' +
          '<div class="u-av"><i class="fas fa-crown" aria-hidden="true"></i></div>' +
          '<div><div class="dr-user-mini-name">홍길동님</div><div class="dr-user-mini-grade">PREMIUM 회원</div></div>' +
        '</div>' +
      '</div>' +
      '<div id="drGuestPanel" class="dr-guest-card">' +
        '<div class="dr-guest-title">비드바이 로그인</div>' +
        '<div class="dr-guest-copy">로그인하고 입찰 현황, 마일리지, 관심 상품을 빠르게 확인하세요.</div>' +
        '<div class="dr-login-actions">' +
          '<button class="dr-action-btn" type="button" onclick="toggleLogin();closeDrawer()">로그인</button>' +
          '<button class="dr-action-btn secondary" type="button">회원가입</button>' +
        '</div>' +
      '</div>' +
      '<div class="dr-sec"><div class="dr-quick">' +
        '<div class="dr-quick-item"><div class="dr-quick-icon"><i class="fas fa-truck-fast"></i></div><div class="dr-quick-label">배송관리</div></div>' +
        '<div class="dr-quick-item"><div class="dr-quick-icon"><i class="fas fa-won-sign"></i></div><div class="dr-quick-label">MY혜택</div></div>' +
        '<div class="dr-quick-item"><div class="dr-quick-icon"><i class="fas fa-file-invoice"></i></div><div class="dr-quick-label">관심항목</div></div>' +
        '<div class="dr-quick-item" onclick="location.href=\'mobile_mypage.html\'" style="cursor:pointer"><div class="dr-quick-icon"><i class="fas fa-calendar-check"></i></div><div class="dr-quick-label">마이페이지</div></div>' +
      '</div></div>' +
      '<div class="dr-sec"><div class="dr-sec-title">카테고리</div><div class="dr-cat-list">' +
        '<div class="dr-cat-item"><span class="dr-cat-flag">JP</span><span class="dr-cat-label">일본야후경매</span><i class="fas fa-chevron-down dr-cat-arrow"></i></div>' +
        '<div class="dr-cat-item"><span class="dr-cat-flag">US</span><span class="dr-cat-label">미국이베이경매</span><i class="fas fa-chevron-down dr-cat-arrow"></i></div>' +
        '<div class="dr-cat-item"><span class="dr-cat-flag">GB</span><span class="dr-cat-label">영국이베이경매</span><i class="fas fa-chevron-down dr-cat-arrow"></i></div>' +
        '<div class="dr-cat-item"><span class="dr-cat-flag">JP</span><span class="dr-cat-label">일본메루카리</span><i class="fas fa-chevron-down dr-cat-arrow"></i></div>' +
        '<div class="dr-cat-item"><span class="dr-cat-flag">JP</span><span class="dr-cat-label">일본구매대행</span><i class="fas fa-chevron-down dr-cat-arrow"></i></div>' +
      '</div></div>' +
      '<div class="dr-sec"><div class="dr-sec-title">이용가이드</div><div class="dr-link-grid">' +
        '<a href="#">초보자가이드</a><a href="#">수수료안내</a><a href="#">배송비안내</a><a href="#">관부가세안내</a>' +
      '</div></div>' +
      '<div class="dr-sec" style="border-bottom:none"><div class="dr-sec-title">고객센터</div><div class="dr-link-grid">' +
        '<a href="#">공지사항</a><a href="#">자주하는질문</a><a href="#">1:1문의</a><a href="#">커뮤니티</a>' +
      '</div></div>' +
      '<div class="drawer-cs-card">' +
        '<div class="drawer-cs-tel">1544-5224</div>' +
        '<p class="drawer-cs-time">평일 AM 10:00 - PM 17:00 (점심 PM 12:30 - 13:30)</p>' +
        '<div class="drawer-cs-actions"><button type="button">1:1 문의</button><button type="button">FAQ</button><button type="button">공지사항</button></div>' +
      '</div>' +
      '<div style="height:24px"></div>'
    );
  }

  function menuSection(id, icon, label, links) {
    var linkHtml = links.map(function (item) {
      var danger = item[2] ? ' danger' : '';
      return '<a class="user-menu-link' + danger + '" href="' + item[0] + '">' + item[1] + '</a>';
    }).join('');
    return (
      '<div class="user-menu-section">' +
        '<button class="user-menu-item user-menu-trigger" type="button" aria-expanded="false" aria-controls="' + id + '">' +
          '<span class="user-menu-icon"><i class="fas ' + icon + '" aria-hidden="true"></i></span><span>' + label + '</span><span class="chev"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>' +
        '</button>' +
        '<div class="user-menu-panel" id="' + id + '">' + linkHtml + '</div>' +
      '</div>'
    );
  }

  function rightDrawerHTML() {
    return (
      '<div class="user-drawer-head"><div class="user-member-row"><div class="user-crown"><i class="fas fa-crown" aria-hidden="true"></i></div><div><strong class="user-name-strong">홍길동 회원님</strong><span class="user-vip-chip">VIP</span></div></div>' +
        '<p class="user-vip-copy">VIP 등급 달성! 최고 혜택을 누리세요 🎉</p>' +
        '<div class="user-vip-bar"><span></span></div>' +
        '<div class="user-asset-box"><div><span>마일리지</span><strong>4,500원</strong></div><div><span>예치금</span><strong>29,870원</strong></div></div>' +
      '</div>' +
      '<div class="user-status-grid"><div><strong>3</strong><span>입찰 진행 중</span></div><div><strong>1</strong><span>1차 결제 대기</span></div><div><strong>0</strong><span>2차 결제 대기</span></div></div>' +
      '<nav class="user-menu-list">' +
        menuSection('mm-menu-trade', 'fa-gavel', '나의 거래 현황', [['mobile_mypage.html', '거래 전체 목록'], ['mobile_mypage.html', '경매 입찰/유찰'], ['mobile_mypage.html', '구매 신청 목록']]) +
        menuSection('mm-menu-delivery', 'fa-truck-fast', '배송관리', [['#', '배송 신청/변경'], ['#', '배송지 관리']]) +
        menuSection('mm-menu-favorites', 'fa-heart', '관심 항목 관리', [['#', '관심 출품자'], ['#', '관심 물품'], ['#', '관심 키워드']]) +
        menuSection('mm-menu-benefit', 'fa-gift', 'MY 혜택', [['mobile_mileage.html', '마일리지 / 쿠폰'], ['#', 'MY 등급']]) +
        menuSection('mm-menu-info', 'fa-user', '나의 정보관리', [['#', '예치금 관리'], ['#', '보증금 관리'], ['#', '회원정보 수정'], ['#', '비밀번호 변경'], ['#', '회원 탈퇴', true]]) +
        '<button class="user-menu-item logout" type="button" onclick="toggleLogin();closeUserDrawer()"><span class="emoji">🔒</span><span>로그아웃</span></button>' +
      '</nav>'
    );
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
    document.querySelectorAll('.user-menu-trigger').forEach(function (btn) {
      if (btn.dataset.bound === '1') return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var section = btn.closest('.user-menu-section');
        var isOpen = section && section.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(Boolean(isOpen)));
      });
    });
  }

  // 좌/우 드로어의 로그인 의존 UI를 현재 상태에 맞게 토글
  function syncLoginUI() {
    var loggedIn = isLoggedIn();
    var set = function (id, display) {
      var el = document.getElementById(id);
      if (el) el.style.display = display;
    };
    set('drGuestHd', loggedIn ? 'none' : 'flex');
    set('drUserHd', loggedIn ? 'flex' : 'none');
    set('drGuestPanel', loggedIn ? 'none' : 'block');
  }

  function render() {
    var drawerOv = ensureNode('drawerOv', 'div', 'drawer-ov');
    var drawer = ensureNode('drawer', 'div', 'drawer');
    var userDrawerOv = ensureNode('userDrawerOv', 'div', 'user-drawer-ov');
    var userDrawer = ensureNode('userDrawer', 'div', 'user-drawer');

    drawerOv.onclick = closeDrawer;
    userDrawerOv.onclick = closeUserDrawer;
    drawer.innerHTML = leftDrawerHTML();
    userDrawer.innerHTML = rightDrawerHTML();
    bindUserMenu();
    syncLoginUI();

    document.dispatchEvent(new CustomEvent('bb:mobile-login', { detail: { loggedIn: isLoggedIn() } }));
  }

  function closeDrawer() {
    document.getElementById('drawer')?.classList.remove('open');
    document.getElementById('drawerOv')?.classList.remove('open');
    document.querySelector('.hb')?.setAttribute('aria-expanded', 'false');
  }

  function closeUserDrawer() {
    document.getElementById('userDrawer')?.classList.remove('open');
    document.getElementById('userDrawerOv')?.classList.remove('open');
  }

  window.bbIsLoggedIn = isLoggedIn;
  window.toggleLogin = function () {
    if (isLoggedIn()) localStorage.removeItem(LOGIN_KEY);
    else localStorage.setItem(LOGIN_KEY, '1');
    closeDrawer();
    closeUserDrawer();
    syncLoginUI();
    document.dispatchEvent(new CustomEvent('bb:mobile-login', { detail: { loggedIn: isLoggedIn() } }));
  };
  window.openDrawer = function () {
    closeUserDrawer();
    document.getElementById('drawer')?.classList.add('open');
    document.getElementById('drawerOv')?.classList.add('open');
    document.querySelector('.hb')?.setAttribute('aria-expanded', 'true');
  };
  window.closeDrawer = closeDrawer;
  window.openUserDrawer = function () {
    if (!isLoggedIn()) return;
    closeDrawer();
    document.getElementById('userDrawer')?.classList.add('open');
    document.getElementById('userDrawerOv')?.classList.add('open');
  };
  window.closeUserDrawer = closeUserDrawer;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

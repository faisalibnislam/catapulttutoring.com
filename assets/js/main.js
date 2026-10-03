/* Catapult Tutoring homepage interactions. No dependencies. */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }

  function scrollToEl(el) {
    el.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  }

  /* Header: solid background and border once the page scrolls */
  var header = $('[data-header]');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  var toggle = $('[data-menu-toggle]');
  var menu = $('[data-menu]');
  var menuLabel = $('[data-menu-label]');
  var menuTimer;

  function menuIsOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }

  function openMenu() {
    clearTimeout(menuTimer);
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    menuLabel.textContent = 'Close menu';
    header.classList.add('menu-is-open');
    doc.body.classList.add('menu-open');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { menu.classList.add('is-open'); });
    });
    var first = $('a', menu);
    if (first) first.focus({ preventScroll: true });
  }

  function closeMenu(returnFocus) {
    if (!menuIsOpen()) return;
    toggle.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Open menu';
    header.classList.remove('menu-is-open');
    doc.body.classList.remove('menu-open');
    menu.classList.remove('is-open');
    menuTimer = setTimeout(function () { menu.hidden = true; }, reduceMotion.matches ? 0 : 230);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    menuIsOpen() ? closeMenu(false) : openMenu();
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu(false);
  });

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuIsOpen()) closeMenu(true);
  });

  doc.addEventListener('click', function (e) {
    if (menuIsOpen() && !e.target.closest('[data-header]')) closeMenu(false);
  });

  /* Keep focus inside the open menu panel and its toggle */
  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !menuIsOpen()) return;
    var items = [toggle].concat($$('a, button', menu));
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  var desktopQuery = window.matchMedia('(min-width: 1000px)');
  function onDesktopChange(q) { if (q.matches) closeMenu(false); }
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);

  /* Active section in the navigation */
  var navLinks = $$('[data-nav]');
  var sections = ['subjects', 'approach', 'tutors', 'reviews', 'faq']
    .map(function (id) { return doc.getElementById(id); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (a) {
      if (id && a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
      var current = null;
      sections.forEach(function (s) { if (visible[s.id]) current = current || s.id; });
      setActive(current);
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Scroll reveals */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    // Stagger siblings that share a parent
    reveals.forEach(function (el) {
      var siblings = $$(':scope > .reveal', el.parentElement);
      var i = siblings.indexOf(el);
      if (i > 0) el.style.setProperty('--i', Math.min(i, 4));
    });
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealer.observe(el); });
    root.classList.add('reveal-ready');
  }

  /* FAQ accordion */
  $$('[data-accordion] .acc-trigger').forEach(function (btn) {
    var panel = doc.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
    });
  });

  /* Subject choice carries into the contact form */
  var form = $('[data-contact-form]');
  var select = $('#f-subject');
  var subjectField = $('[data-subject-field]');
  var subjectNote = $('[data-subject-note]');
  var clearBtn = $('[data-clear-subject]');

  function updateSubjectUi(fromCard) {
    var hasValue = !!select.value;
    clearBtn.hidden = !hasValue;
    subjectNote.textContent = fromCard && hasValue
      ? 'Subject set to ' + select.value + '. You can change it here.'
      : '';
  }

  function chooseSubject(value) {
    select.value = value;
    updateSubjectUi(true);
    var contact = doc.getElementById('contact');
    scrollToEl(contact);
    subjectField.classList.remove('is-highlighted');
    void subjectField.offsetWidth;
    subjectField.classList.add('is-highlighted');
    // Move focus to the first empty required field so keyboard users land in the form
    setTimeout(function () {
      var target = $('#f-name').value ? $('#f-email') : $('#f-name');
      target.focus({ preventScroll: true });
    }, reduceMotion.matches ? 0 : 450);
  }

  $$('[data-subject]').forEach(function (btn) {
    btn.addEventListener('click', function () { chooseSubject(btn.getAttribute('data-subject')); });
  });
  $$('[data-subject-link]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      chooseSubject(link.getAttribute('data-subject-link'));
    });
  });

  select.addEventListener('change', function () { updateSubjectUi(false); });
  clearBtn.addEventListener('click', function () {
    select.value = '';
    updateSubjectUi(false);
    subjectNote.textContent = 'Subject cleared.';
    select.focus();
  });

  /* Contact form validation.
     There is no submission backend yet, so a valid form shows an honest preview notice
     and nothing is sent. Replace handleValidSubmit with the real request when connected. */
  var status = $('[data-form-status]');
  var submitBtn = $('[data-submit]');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var rules = {
    'f-name': function (v) { return v.trim() ? '' : 'Please enter your name.'; },
    'f-email': function (v) {
      if (!v.trim()) return 'Please enter your email so we can reply.';
      return emailPattern.test(v.trim()) ? '' : 'That email address looks incomplete. Please check it.';
    }
  };

  function validateField(id) {
    var input = doc.getElementById(id);
    var msg = rules[id](input.value);
    var err = $('[data-error-for="' + id + '"]');
    err.textContent = msg;
    if (msg) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
    return !msg;
  }

  Object.keys(rules).forEach(function (id) {
    var input = doc.getElementById(id);
    input.addEventListener('blur', function () {
      if (input.value || input.hasAttribute('aria-invalid')) validateField(id);
    });
    input.addEventListener('input', function () {
      if (input.hasAttribute('aria-invalid')) validateField(id);
    });
  });

  function handleValidSubmit() {
    submitBtn.classList.add('is-loading');
    submitBtn.setAttribute('aria-disabled', 'true');
    $('.btn-label', submitBtn).textContent = 'Checking';
    setTimeout(function () {
      submitBtn.classList.remove('is-loading');
      submitBtn.removeAttribute('aria-disabled');
      $('.btn-label', submitBtn).textContent = 'Send message';
      status.classList.remove('is-error');
      status.innerHTML = '<strong>Your details look good, but nothing was sent.</strong>' +
        'This form is a design preview and is not connected to email yet.';
    }, reduceMotion.matches ? 0 : 700);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    var ids = Object.keys(rules);
    var results = ids.map(validateField);
    var firstBad = ids[results.indexOf(false)];
    if (firstBad) {
      status.classList.add('is-error');
      var count = results.filter(function (ok) { return !ok; }).length;
      status.textContent = count === 1
        ? 'One field needs attention before you can send.'
        : count + ' fields need attention before you can send.';
      doc.getElementById(firstBad).focus();
      return;
    }
    handleValidSubmit();
  });
})();

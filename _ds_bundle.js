/* @ds-bundle: {"format":4,"namespace":"DanywenalltDesignSystem_d9b682","components":[{"name":"ArrowRight","sourcePath":"components/icons/ArrowRight.jsx"}],"sourceHashes":{"components/icons/ArrowRight.jsx":"01225eccf166","ui_kits/website/Booking.jsx":"6a7ef1811a25","ui_kits/website/Camping.jsx":"0120032c10c5","ui_kits/website/Chrome.jsx":"0ad0af520b3e","ui_kits/website/History.jsx":"85599e9599ea","ui_kits/website/Home.jsx":"b4bacc20119c","ui_kits/website/Pages.jsx":"8afcf231ea61","ui_kits/website/image-slot.js":"fff26d081c8d","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DanywenalltDesignSystem_d9b682 = window.DanywenalltDesignSystem_d9b682 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/icons/ArrowRight.jsx
try { (() => {
// figma node: 1:651 Arrow Right
function ArrowRight(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "rgb(17,17,17)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 10,
    viewBox: "0 0 14 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 14,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.36 9.731 C 8.18 9.552 8.093 9.335 8.101 9.081 C 8.108 8.827 8.202 8.61 8.382 8.43 L 10.921 5.897 L 0.899 5.897 C 0.644 5.897 0.431 5.811 0.258 5.639 C 0.085 5.466 -0.001 5.254 0 5 C 0 4.746 0.086 4.533 0.259 4.361 C 0.431 4.188 0.645 4.103 0.899 4.103 L 10.921 4.103 L 8.36 1.547 C 8.18 1.368 8.09 1.155 8.09 0.908 C 8.09 0.661 8.18 0.448 8.36 0.269 C 8.539 0.09 8.753 0 9 0 C 9.248 0 9.461 0.09 9.64 0.269 L 13.753 4.372 C 13.843 4.462 13.907 4.559 13.944 4.664 C 13.982 4.768 14.001 4.88 14 5 C 14 5.12 13.981 5.232 13.943 5.336 C 13.906 5.441 13.842 5.538 13.753 5.628 L 9.618 9.753 C 9.453 9.918 9.247 10 9 10 C 8.754 10 8.54 9.91 8.36 9.731 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { ArrowRight, __ds_default_components_icons_ArrowRight_1w44q5q: ArrowRight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/ArrowRight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
const DW_TODAY = new Date(2026, 9, 20);
const DW_PRICES = {
  exclusive: {
    weekday: 720,
    weekend: 890,
    label: 'Exclusive hire',
    note: 'Whole house, up to 35 guests'
  },
  group: {
    pp: 29,
    label: 'Group booking',
    note: 'Serviced stay for 16–35 people'
  }
};
const DW_MEALS = [['none', 'Room only', 0], ['bb', 'Bed & breakfast', 8], ['hb', 'Half board', 19], ['fb', 'Full board', 27]];
const dwKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const dwBooked = d => {
  const n = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
  return n * 7919 % 11 < 3;
};
const dwFmt = d => d.toLocaleDateString('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short'
});
const dwDMY = d => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
const DW_PARTY = [['males', 'Male', 'Adult'], ['females', 'Female', 'Adult'], ['malesChild', 'Male', 'Under 18'], ['femalesChild', 'Female', 'Under 18']];
const yhaUrl = (s, e, party) => {
  let u = `https://www.yha.org.uk/hostel/yha-brecon-beacons-danywenallt?startDate=${encodeURIComponent(dwDMY(s))}&endDate=${encodeURIComponent(dwDMY(e))}&males=${party.males}&females=${party.females}`;
  if (party.malesChild || party.femalesChild) u += `&malesChild=${party.malesChild}&femalesChild=${party.femalesChild}`;
  return u;
};
const gbp = n => '£' + n.toLocaleString('en-GB');
function Calendar({
  start,
  end,
  onPick
}) {
  const [view, setView] = React.useState(new Date(DW_TODAY.getFullYear(), DW_TODAY.getMonth(), 1));
  const first = (view.getDay() + 6) % 7;
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({
    length: days
  }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))];
  const state = d => {
    if (d < DW_TODAY) return 'past';
    if (dwBooked(d)) return 'booked';
    if (start && dwKey(d) === dwKey(start)) return 'edge';
    if (end && dwKey(d) === dwKey(end)) return 'edge';
    if (start && end && d > start && d < end) return 'in';
    return 'free';
  };
  const shift = n => setView(new Date(view.getFullYear(), view.getMonth() + n, 1));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dw-btn dw-btn--ghost",
    style: {
      height: 36,
      padding: '0 14px'
    },
    onClick: () => shift(-1),
    disabled: view <= new Date(DW_TODAY.getFullYear(), DW_TODAY.getMonth(), 1)
  }, "Prev"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 18
    }
  }, view.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  })), /*#__PURE__*/React.createElement("button", {
    className: "dw-btn dw-btn--ghost",
    style: {
      height: 36,
      padding: '0 14px'
    },
    onClick: () => shift(1)
  }, "Next")), /*#__PURE__*/React.createElement("div", {
    className: "dw-cal"
  }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dw-cal__h"
  }, d)), cells.map((d, i) => d ? /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "dw-day",
    "data-state": state(d),
    onClick: () => {
      const s = state(d);
      if (s !== 'past' && s !== 'booked') onPick(d);
    }
  }, d.getDate()) : /*#__PURE__*/React.createElement("div", {
    key: i
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 13,
      color: 'var(--dw-graphite)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--dw-green)'
    }
  }), "Selected"), /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'line-through'
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -10
    }
  }, "Unavailable")));
}
function BookingWidget({
  initialMode = 'exclusive'
}) {
  const [mode, setMode] = React.useState(initialMode);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [party, setParty] = React.useState({
    males: 10,
    females: 10,
    malesChild: 0,
    femalesChild: 0
  });
  const g = DW_PARTY.reduce((s, [k]) => s + party[k], 0);
  const bump = (k, n) => setParty(p => {
    const v = Math.max(0, p[k] + n);
    const tot = g - p[k] + v;
    return tot > 35 ? p : {
      ...p,
      [k]: v
    };
  });
  const [meal, setMeal] = React.useState('bb');
  const [handoff, setHandoff] = React.useState(false);
  const pick = d => {
    if (!start || end || d <= start) {
      setStart(d);
      setEnd(null);
      return;
    }
    for (let x = new Date(start); x <= d; x.setDate(x.getDate() + 1)) if (dwBooked(x)) {
      setStart(d);
      setEnd(null);
      return;
    }
    setEnd(d);
  };
  const nightsList = [];
  if (start && end) for (let x = new Date(start); x < end; x.setDate(x.getDate() + 1)) nightsList.push(new Date(x));
  const nights = nightsList.length;
  const minG = mode === 'group' ? 16 : 1;
  const mealPP = DW_MEALS.find(m => m[0] === meal)[2];
  let stay = 0;
  if (mode === 'exclusive') stay = nightsList.reduce((s, d) => s + ([5, 6].includes(d.getDay()) ? DW_PRICES.exclusive.weekend : DW_PRICES.exclusive.weekday), 0);else stay = nights * g * DW_PRICES.group.pp;
  const food = nights * g * mealPP;
  const minNights = mode === 'exclusive' ? 2 : 1;
  const ok = nights >= minNights && g >= minG;
  if (handoff) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${DW_ASSETS}/logos/yha-partner.png`,
    alt: "YHA Partner",
    style: {
      height: 72
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-h4"
  }, "Taking you to YHA to finish booking"), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      opacity: .85
    }
  }, DW_PRICES[mode].label, " \xB7 ", dwFmt(start), " \u2013 ", dwFmt(end), " \xB7 ", g, " guests \xB7 ", gbp(stay + food), ". Your dates are held for 15 minutes while you complete payment on yha.org.uk."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    arrow: true,
    onClick: () => window.open(yhaUrl(start, end, party), '_blank')
  }, "Continue to yha.org.uk"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => setHandoff(false)
  }, "Back")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--dw-smoke)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      borderRight: '1px solid var(--dw-smoke)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-seg"
  }, ['exclusive', 'group'].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    "aria-pressed": mode === m,
    onClick: () => setMode(m)
  }, DW_PRICES[m].label))), /*#__PURE__*/React.createElement("div", {
    className: "dw-caption",
    style: {
      marginTop: -12
    }
  }, DW_PRICES[mode].note), /*#__PURE__*/React.createElement(Calendar, {
    start: start,
    end: end,
    onPick: pick
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: 'var(--dw-cream)',
      borderRadius: '0 var(--radius-card) var(--radius-card) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-2",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-field"
  }, "Check in", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 500
    }
  }, start ? dwFmt(start) : '—')), /*#__PURE__*/React.createElement("div", {
    className: "dw-field"
  }, "Check out", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 500
    }
  }, end ? dwFmt(end) : '—'))), /*#__PURE__*/React.createElement("div", {
    className: "dw-field"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Guests"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: g < minG ? '#9a3b2e' : 'var(--dw-graphite)',
      fontWeight: 400
    }
  }, g, " of ", minG, "\u201335")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 8
    }
  }, DW_PARTY.map(([k, sex, age]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      background: '#fff',
      border: '1px solid var(--dw-smoke)',
      borderRadius: 10,
      padding: '8px 8px 8px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, sex), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--dw-graphite)'
    }
  }, age)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dw-btn dw-btn--ghost",
    "aria-label": `Fewer ${sex} ${age}`,
    style: {
      height: 32,
      width: 32,
      padding: 0,
      justifyContent: 'center'
    },
    onClick: () => bump(k, -1),
    disabled: !party[k]
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      minWidth: 22,
      textAlign: 'center'
    }
  }, party[k]), /*#__PURE__*/React.createElement("button", {
    className: "dw-btn dw-btn--ghost",
    "aria-label": `More ${sex} ${age}`,
    style: {
      height: 32,
      width: 32,
      padding: 0,
      justifyContent: 'center'
    },
    onClick: () => bump(k, 1),
    disabled: g >= 35
  }, "+")))))), /*#__PURE__*/React.createElement("label", {
    className: "dw-field"
  }, "Catering", /*#__PURE__*/React.createElement("select", {
    value: meal,
    onChange: e => setMeal(e.target.value)
  }, DW_MEALS.map(([k, l, p]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, l, p ? ` (+${gbp(p)} pp/night)` : '')))), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list",
    style: {
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, mode === 'exclusive' ? `Whole house × ${nights} night${nights === 1 ? '' : 's'}` : `${g} guests × ${nights} night${nights === 1 ? '' : 's'}`), /*#__PURE__*/React.createElement("span", null, gbp(stay))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "Catering"), /*#__PURE__*/React.createElement("span", null, gbp(food))), /*#__PURE__*/React.createElement("li", {
    style: {
      fontWeight: 600,
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, gbp(stay + food)))), /*#__PURE__*/React.createElement(Btn, {
    arrow: true,
    disabled: !ok,
    onClick: () => setHandoff(true),
    style: {
      justifyContent: 'center'
    }
  }, ok ? 'Continue to YHA checkout' : g < minG ? `Add guests (min ${minG})` : start && !end ? 'Choose check-out date' : `Choose dates (min ${minNights} night${minNights > 1 ? 's' : ''})`), /*#__PURE__*/React.createElement("div", {
    className: "dw-caption",
    style: {
      fontSize: 13
    }
  }, "Indicative prices. Final price and payment on yha.org.uk.")));
}
Object.assign(window, {
  BookingWidget,
  Calendar,
  gbp,
  DW_PRICES,
  DW_MEALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Camping.jsx
try { (() => {
const DW_CAMP_INCLUDES = ['Hot showers and toilets in the farmhouse', 'Self-catering kitchen and dining room', 'Drying room for wet kit', 'Cycle store', 'BBQ area and outdoor seating', 'Water refill station', 'Free parking, including minibuses'];
function Camping({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Camping",
    title: "Pitch up in the valley. Come in for a hot shower.",
    lead: "Sleep under canvas in the farmhouse grounds, with the comforts of the house close at hand and the trails starting at the gate."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: "camp-hero",
    label: "Tents in the grounds, valley behind",
    style: {
      gridColumn: '1 / -1',
      aspectRatio: '21/9'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "camp-pitch",
    label: "Pitch area",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "camp-fire",
    label: "Evening round the BBQ",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bathroom",
    label: "Bathroom / showers",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "camp-morning",
    label: "Morning in the valley",
    style: {
      aspectRatio: '4/3'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Outdoors by night, comfort by day."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Camping keeps your group close to the hills and the cost down. The farmhouse stays your basecamp \u2014 somewhere to cook, dry off, warm up and gather.")), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list dw-body"
  }, DW_CAMP_INCLUDES.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      background: 'var(--dw-cloud)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Who it's for"), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-3",
    style: {
      gap: 40
    }
  }, [['Schools & youth groups', 'Expedition practice, DofE and outdoor learning, with the house for meals and kit.'], ['Friends & families', 'A weekend under canvas without giving up a proper shower.'], ['Add to a house booking', 'Overflow space when your group is bigger than the beds.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderTop: '1.5px solid var(--dw-green)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4",
    style: {
      fontSize: 26
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,4cqw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Planning a camping trip?"), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      opacity: .85
    }
  }, "Tell us your dates and group size and we'll confirm pitches and prices."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    arrow: true,
    onClick: () => go('contact')
  }, "Enquire about camping"))), /*#__PURE__*/React.createElement(Pattern, {
    tone: "cream",
    style: {
      minHeight: 280
    }
  })))));
}
Object.assign(window, {
  Camping
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Camping.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const A = '../../assets';
const NAV = [['stay', 'The house'], ['camping', 'Camping'], ['history', 'Our story'], ['location', 'Getting here'], ['prices', 'Prices & availability'], ['faq', 'FAQ'], ['contact', 'Contact']];
const NAV_TOP = [['stay', 'The house'], ['camping', 'Camping'], ['prices', 'Prices & availability'], ['contact', 'Contact'], ['about', 'About', [['history', 'Our story'], ['location', 'Getting here'], ['faq', 'FAQ']]]];
function NavMenu({
  label,
  items,
  page,
  nav,
  overlay
}) {
  const [open, setOpen] = React.useState(false);
  const active = items.some(([k]) => k === page);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    "aria-expanded": open,
    "aria-current": active ? 'page' : undefined,
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .2s'
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      paddingTop: 10,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-cream)',
      color: 'var(--dw-green)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--dw-smoke)',
      padding: 8,
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setOpen(false);
      nav(k);
    },
    style: {
      padding: '10px 12px',
      borderRadius: 8,
      border: 0,
      background: page === k ? 'var(--dw-cloud)' : 'transparent',
      color: 'var(--dw-green)'
    }
  }, l)))));
}
function Logo({
  tone = 'green',
  variant = 'horizontal',
  height = 22
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/danywenallt-${variant}-${tone}.svg`,
    alt: "Danywenallt",
    style: {
      height,
      display: 'block'
    }
  });
}
function Arrow({
  size = 20,
  style
}) {
  const {
    ArrowRight
  } = window.DanywenalltDesignSystem_d9b682 || {};
  if (!ArrowRight) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: `scale(${size / 20})`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    style: {
      color: 'currentColor'
    }
  }));
}
function Btn({
  kind = 'primary',
  children,
  arrow,
  ...p
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `dw-btn dw-btn--${kind}`
  }, p), children, arrow && /*#__PURE__*/React.createElement(Arrow, null));
}
const DW_PHOTOS = {
  'hero-valley': 'valley-distant.webp',
  'stay-exterior': 'exterior.webp',
  'home-dining': 'dining.webp',
  'home-lounge': 'front-room.jpg',
  'stay-bedroom': 'bedroom-4-bed.webp',
  'stay-bathroom': 'shower.webp',
  'stay-kitchen': 'kitchen.webp',
  'stay-bed3': 'bedroom-3-bed.webp',
  'stay-bed': 'bedroom.webp',
  'stay-bed4b': 'bedroom-4-bed-b.webp',
  'home-activity': 'school-trip.jpg',
  'aud-friends': 'exterior-seating.webp',
  'aud-teams': 'dining-2.webp',
  'aud-schools': 'school-trip.jpg',
  'camp-hero': 'orchard-camping.jpg',
  'camp-pitch': 'exterior-seating.webp',
  'camp-morning': 'valley-distant.webp',
  'contact-photo': 'exterior.webp',
  'history-hero': 'valley-distant.webp'
};
function Photo({
  id,
  label,
  style,
  radius = true
}) {
  const src = DW_PHOTOS[id] ? `${A}/photos/${DW_PHOTOS[id]}` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "dw-media",
    style: {
      borderRadius: radius ? undefined : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    placeholder: label,
    src: src,
    alt: label,
    style: {
      position: 'absolute',
      inset: 0
    }
  }));
}
function Header({
  page,
  go,
  overlay
}) {
  const [open, setOpen] = React.useState(false);
  const tone = overlay ? 'cream' : 'green';
  const nav = k => {
    setOpen(false);
    go(k);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `dw-header ${overlay ? 'dw-header--overlay' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-header__in"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      all: 'unset',
      cursor: 'pointer'
    },
    "aria-label": "Home"
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: tone,
    height: 20
  })), /*#__PURE__*/React.createElement("nav", {
    className: "dw-nav"
  }, NAV_TOP.map(([k, l, sub]) => sub ? /*#__PURE__*/React.createElement(NavMenu, {
    key: k,
    label: l,
    items: sub,
    page: page,
    nav: nav,
    overlay: overlay
  }) : /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-current": page === k ? 'page' : undefined,
    onClick: () => nav(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "dw-header__cta"
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: overlay ? 'light' : 'primary',
    onClick: () => nav('prices'),
    style: {
      height: 44
    }
  }, "Check availability")), /*#__PURE__*/React.createElement("button", {
    className: "dw-burger dw-btn dw-btn--ghost",
    style: {
      height: 40,
      padding: '0 16px'
    },
    onClick: () => setOpen(true)
  }, "Menu")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    height: 18
  }), /*#__PURE__*/React.createElement("button", {
    className: "dw-btn dw-btn--ghost",
    style: {
      height: 40,
      padding: '0 16px'
    },
    onClick: () => setOpen(false)
  }, "Close")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [['home', 'Home'], ...NAV].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => nav(k),
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontSize: 34,
      fontWeight: 500,
      padding: '8px 0'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    arrow: true,
    onClick: () => nav('prices'),
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Check availability"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "dw-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      padding: '80px 40px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-split",
    style: {
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    variant: "stacked",
    height: 96
  })), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-3",
    style: {
      fontSize: 15,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      marginBottom: 12,
      opacity: .7
    }
  }, "Visit"), "Danywenallt", /*#__PURE__*/React.createElement("br", null), "Talybont-on-Usk", /*#__PURE__*/React.createElement("br", null), "Brecon, Powys LD3 7YS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      marginBottom: 12,
      opacity: .7
    }
  }, "Talk to us"), "0345 371 9548", /*#__PURE__*/React.createElement("br", null), "what3words: wheat.ropes.deal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      marginBottom: 12,
      opacity: .7
    }
  }, "Explore"), NAV.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      all: 'unset',
      cursor: 'pointer'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      borderTop: '1px solid rgba(242,240,229,.2)',
      paddingTop: 28,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/yha-partner.png`,
    alt: "YHA Partner",
    style: {
      height: 52,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: 320,
      opacity: .8
    }
  }, "Danywenallt is a YHA partner hostel. Bookings are completed securely on yha.org.uk.")), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "\xA9 2026 Danywenallt"))));
}
function Pattern({
  tone = 'cream',
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `dw-pattern dw-pattern--${tone}`,
    style: style
  }, children);
}
Object.assign(window, {
  Logo,
  Arrow,
  Btn,
  Photo,
  Header,
  Footer,
  Pattern,
  NAV,
  DW_ASSETS: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/History.jsx
try { (() => {
const DW_HISTORY = [['c.1100', 'A Norman manor', 'Wenallt manor takes shape as part of the Lordship of Pencelli, in the parish of Llanddetty and its church of St Detta.'], ['1730s', 'Tyr dan y Wenallt', 'The farm appears in written records: William Morgan’s will mentions a £100 mortgage on Danyrwenallt.'], ['1815', 'The tramroad', 'The Brinore Tramroad is finished, carrying limestone, coal and iron down the valley to the canal at Talybont.'], ['1863', 'The railway', 'The Brecon & Merthyr railway opens. Its line is now the Taff Trail, which guests still cycle from the door.'], ['1893', 'A new owner', 'Tir Danywenallt, otherwise Danywennallt Uchaf Farm, passes to Samuel Williams, a Talybont provision merchant. Sheep graze the slopes of Tor y Foel.'], ['1912', 'Sold for £1,075', 'Samuel Williams sells the farm to William Jones Davies, a coal merchant from Merthyr Tydfil.'], ['1932–39', 'The reservoir', 'Newport Corporation dams the valley. Seventeen homes and farms are taken, and Talybont Reservoir officially opens in 1939.'], ['1958', 'Farming on', 'The Williams family farm Danywenallt Uchaf, Llwynbedw and Berthlwyd as tenants: more than 920 acres beside the new water.'], ['2005', 'A place to learn', 'The farmhouse opens as a National Park study centre and hostel, run with YHA.'], ['2026', 'A new chapter', 'Danywenallt Ltd takes over as a YHA Partner: a modern Welsh basecamp in a very old place.']];
function History({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Our story",
    title: "Below the fair wooded hillside.",
    lead: "Dan-y-wenallt: dan, below; gwen, white or fair; allt, wooded slope. The name has described this spot in Glyn Collwn for centuries."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement(Photo, {
    id: "history-hero",
    label: "The valley and reservoir",
    style: {
      aspectRatio: '21/9'
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "dw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 120
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Nine centuries in one valley."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Manor, farm, tramroad country, then a valley reshaped by water. Danywenallt has been a working part of this landscape for a very long time.")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, DW_HISTORY.map(([y, t, b]) => /*#__PURE__*/React.createElement("li", {
    key: y,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(88px,140px) minmax(0,1fr)',
      gap: 24,
      padding: '28px 0',
      borderTop: '1px solid var(--dw-smoke)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-h4",
    style: {
      color: 'var(--dw-sage)',
      fontSize: 'clamp(22px,2.2cqw,30px)'
    }
  }, y), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, b))))))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,4cqw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      opacity: .7
    }
  }, "Look out for it"), /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "The old mill wheel."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      opacity: .85
    }
  }, "Felin Newydd mill was demolished when the reservoir came, but its iron water wheel survives by the mesh bridge below the Danywenallt drive.")), /*#__PURE__*/React.createElement(Pattern, {
    tone: "cream",
    style: {
      minHeight: 280
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dw-caption",
    style: {
      maxWidth: 760,
      fontSize: 13
    }
  }, "Sources: Powys Archives (B/D/WWA/2), Coflein, talybontonusk.wales, the Blaenau Gwent Heritage Forum and local family history. Do you know more? We\u2019d love to hear it. ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      textDecoration: 'underline',
      color: 'var(--dw-green)'
    }
  }, "Get in touch")))));
}
function HistoryTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-grid-2",
    style: {
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: "history-hero",
    label: "The valley and reservoir",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      color: 'var(--dw-sage)'
    }
  }, "Our story"), /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "A farm since the 1100s."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "From a Norman manor to a sheep farm on Tor y Foel to a valley reshaped by Talybont Reservoir: the stonework here has stories in it."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('history'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Read the history ", /*#__PURE__*/React.createElement(Arrow, null)))));
}
Object.assign(window, {
  History,
  HistoryTeaser
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/History.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const DW_FACTS = [['35', 'guests, whole house to yourselves'], ['16+', 'for serviced group stays'], ['0 min', 'from the door to the trails'], ['LOtC', 'Quality Badge accredited']];
function HeroA({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(92vh, 860px)',
      minHeight: 600,
      color: 'var(--dw-cream)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: "hero-valley",
    label: "Hero: farmhouse in the valley",
    radius: false,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(28,53,42,.45) 0%,rgba(28,53,42,0) 30%,rgba(28,53,42,0) 45%,rgba(28,53,42,.75) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow"
  }, "Brecon Beacons, Wales"), /*#__PURE__*/React.createElement("h1", {
    className: "dw-h1",
    style: {
      maxWidth: 980
    }
  }, "Base Camp, Wales.", /*#__PURE__*/React.createElement("br", null), "Adventure starts at the door."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    arrow: true,
    onClick: () => go('prices')
  }, "Check availability"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => go('stay')
  }, "See the house"))));
}
function Facts() {
  return /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-4",
    style: {
      borderTop: '1px solid var(--dw-smoke)',
      paddingTop: 32
    }
  }, DW_FACTS.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-h3"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "dw-caption"
  }, l))));
}
function ComfortAdventure() {
  const col = (id, label, title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: id,
    label: label,
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list dw-body"
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))));
  return /*#__PURE__*/React.createElement("section", {
    className: "dw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-split"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h2"
  }, "Comfort that backs the adventure."), /*#__PURE__*/React.createElement("p", {
    className: "dw-lead",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Original stonework, characterful beams and an old fireplace to come back to. Wooded slopes, high peaks and waterfalls to head out into. Rest and exploration, side by side.")), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-2",
    style: {
      gap: 40
    }
  }, col('home-lounge', 'Lounge with fireplace', 'Come back to', ['Bunk-bedded rooms, kept together for your group', 'Dining room, lounge and garden', 'Self-catering kitchen or full-board meals', 'Drying room and cycle store']), col('home-activity', 'Walkers on the trail', 'Head out into', ['Waterfall walks and Beacons summits', 'Cycling the Taff Trail from the door', 'Sailing, boating and horse riding nearby', 'Climbing and zip line at Llangorse']))));
}
function Audiences({
  go
}) {
  const items = [['aud-friends', 'Friends & families', 'Unplug together, reconnect with what matters.', 'Shared meals, open landscapes and a whole house that is yours.'], ['aud-teams', 'Teams & colleagues', 'Build team spirit away from the desk.', 'Days on the hills, evenings round one big table.'], ['aud-schools', 'Schools', 'Learn, adventure, discover.', 'LOtC-accredited, practical and affordable — with the classroom outside.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      background: 'var(--dw-cloud)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h2",
    style: {
      maxWidth: 760
    }
  }, "One basecamp, every kind of group."), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-3"
  }, items.map(([id, t, h, b]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: id,
    label: t,
    style: {
      aspectRatio: '4/5'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      color: 'var(--dw-sage)',
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4",
    style: {
      fontSize: 'clamp(22px,2.2cqw,28px)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, b))))));
}
function BookBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dw-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,4cqw,56px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Plan your next group escape."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      opacity: .85
    }
  }, "Exclusive hire for up to 35, or a serviced group stay from 16."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    arrow: true,
    onClick: () => go('prices')
  }, "Check availability"))), /*#__PURE__*/React.createElement(Pattern, {
    tone: "cream",
    style: {
      minHeight: 280
    }
  }))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroA, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    className: "dw-section--tight",
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement(Facts, null))), /*#__PURE__*/React.createElement(ComfortAdventure, null), /*#__PURE__*/React.createElement(Audiences, {
    go: go
  }), /*#__PURE__*/React.createElement(BookBand, {
    go: go
  }));
}
Object.assign(window, {
  Home,
  BookBand,
  Facts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
function PageHead({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-eyebrow",
    style: {
      color: 'var(--dw-sage)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "dw-h1",
    style: {
      maxWidth: 1000
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "dw-lead",
    style: {
      maxWidth: 680,
      color: 'var(--dw-graphite)'
    }
  }, lead)));
}
const DW_FACILITIES = ['Self-catering kitchen', 'Group meals & packed lunches', 'Licensed bar', 'Dining room', 'Lounge with TV', 'Large garden & BBQ area', 'Drying room', 'Cycle store', 'Free WiFi in social spaces', 'Free parking & minibus parking', 'EV charger', 'Wheelchair accessible'];
function Stay({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "The house",
    title: "A converted Welsh farmhouse, all yours.",
    lead: "Original stonework, characterful beams and an old fireplace \u2014 with a well-equipped kitchen and room for your whole group to gather."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: "stay-exterior",
    label: "Farmhouse exterior",
    style: {
      gridColumn: '1 / -1',
      aspectRatio: '21/9'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "home-dining",
    label: "Dining room",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "home-lounge",
    label: "Lounge",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bedroom",
    label: "Bunk room",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bathroom",
    label: "Bathroom / showers",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-kitchen",
    label: "Kitchen",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bed3",
    label: "3-bed room",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bed",
    label: "Bedroom",
    style: {
      aspectRatio: '4/3'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    id: "stay-bed4b",
    label: "4-bed room",
    style: {
      aspectRatio: '4/3'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Sleeping"), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Most bedrooms are dormitory-style with bunk beds. We keep your group's rooms together and never ask you to share with anyone outside your party. Upgrade to sole use of a floor or the entire house.")), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-2",
    style: {
      gap: 16
    }
  }, [['Exclusive hire', 'The entire house for up to 35 guests. Dogs welcome on exclusive hire.'], ['Group booking', 'Serviced stays for 16–35 people, from room only to full board.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--dw-smoke)',
      borderRadius: 'var(--radius-card)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4",
    style: {
      fontSize: 26
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)',
      fontSize: 17
    }
  }, b), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('prices'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8
    }
  }, "See prices ", /*#__PURE__*/React.createElement(Arrow, null))))))), /*#__PURE__*/React.createElement(HistoryTeaser, {
    go: go
  }), /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      background: 'var(--dw-cloud)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Everything a group needs."), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list dw-body",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      columnGap: 32
    }
  }, DW_FACILITIES.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))))), /*#__PURE__*/React.createElement(BookBand, {
    go: go
  }));
}
function Location({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Getting here",
    title: "Halfway up a quiet valley in the Brecon Beacons.",
    lead: "Secluded, but never far from anything. Wooded slopes, high peaks, waterfalls and trails start at the front door."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-2",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-media",
    style: {
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Map",
    src: "https://www.openstreetmap.org/export/embed.html?bbox=-3.36%2C51.85%2C-3.24%2C51.90&layer=mapnik&marker=51.8766111%2C-3.2977676",
    style: {
      border: 0,
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: 0,
      filter: 'grayscale(.6) sepia(.15)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      padding: 'clamp(28px,4cqw,48px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-h4"
  }, "Danywenallt", /*#__PURE__*/React.createElement("br", null), "Talybont-on-Usk, Brecon", /*#__PURE__*/React.createElement("br", null), "Powys LD3 7YS"), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list",
    style: {
      fontSize: 15
    }
  }, [['OS Map', '161'], ['Grid ref', 'SO107206'], ['Lat / Lng', '51.8766, −3.2978'], ['what3words', 'wheat.ropes.deal']].map(([k, v]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: {
      borderColor: 'rgba(242,240,229,.2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v))))))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-grid-3",
    style: {
      gap: 40
    }
  }, [['By car', 'Free parking on site, including minibus parking and a free EV charger. Coach parking nearby.'], ['By public transport', 'Nearest mainline station is Abergavenny. Local buses run to Talybont-on-Usk; ask us about the last stretch up the valley.'], ['On arrival', '24-hour access after check-in. Full mobile coverage and WiFi in the social spaces.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderTop: '1.5px solid var(--dw-green)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4",
    style: {
      fontSize: 26
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      background: 'var(--dw-cloud)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "On the doorstep"), /*#__PURE__*/React.createElement("div", {
    className: "dw-grid-4"
  }, [['loc-waterfalls', 'Waterfall walks'], ['loc-taff', 'Taff Trail cycling'], ['loc-water', 'Sailing & boating'], ['loc-llangorse', 'Llangorse climbing & zip line']].map(([id, l]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: id,
    label: l,
    style: {
      aspectRatio: '1/1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, l)))))));
}
function Prices() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Prices & availability",
    title: "Pick your dates.",
    lead: "Choose exclusive hire or a serviced group stay, select your nights and see the price. You'll finish booking securely with YHA."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap",
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(BookingWidget, null)), /*#__PURE__*/React.createElement("section", {
    className: "dw-section",
    style: {
      background: 'var(--dw-cloud)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-grid-2",
    style: {
      gap: 16
    }
  }, [['Exclusive hire', [['Sun–Thu', `from ${gbp(DW_PRICES.exclusive.weekday)} / night`], ['Fri & Sat', `from ${gbp(DW_PRICES.exclusive.weekend)} / night`], ['Minimum stay', '2 nights'], ['Guests', 'Up to 35']]], ['Group booking', [['Bed', `from ${gbp(DW_PRICES.group.pp)} pp / night`], ['Bed & breakfast', '+£8 pp / night'], ['Half board', '+£19 pp / night'], ['Full board', '+£27 pp / night']]]].map(([t, rows]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dw-h4"
  }, t), /*#__PURE__*/React.createElement("ul", {
    className: "dw-list dw-body",
    style: {
      fontSize: 17
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dw-graphite)'
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v)))))))));
}
const DW_FAQ = [['Can we have the whole place to ourselves?', 'Yes. Danywenallt is offered on an exclusive hire basis, so you get the entire house. Serviced group stays for 16–35 people are also available.'], ['What are the bedrooms like?', 'Most are dormitory-style with bunk beds. Your group’s rooms are kept together and you’ll never share with anyone outside your party.'], ['Is food included?', 'Choose from self-catering, bed & breakfast, half board or full board. Vegetarian options are available and we aim to cater for special dietary requests.'], ['Can we bring a dog?', 'Pets are welcome only on exclusive hire. Assistance dogs are always welcome — please tell us when you book.'], ['Is it suitable for school trips?', 'Yes. Danywenallt holds a Learning Outside the Classroom Quality Badge (105537): audited risk assessments, verified insurance and quality-checked safety logs.'], ['Is there parking and WiFi?', 'Free on-site parking including minibuses, a free EV charger, and free WiFi in the social spaces.'], ['Who handles the booking?', 'Danywenallt is a YHA partner. You choose dates and see prices here, then complete payment securely on yha.org.uk.']];
function FAQ({
  go
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "FAQ",
    title: "Good to know before you go."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split",
    style: {
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    },
    className: "dw-hide-m"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Can\u2019t see your question?"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => go('contact')
  }, "Get in touch"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--dw-smoke)'
    }
  }, DW_FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    className: "dw-faq"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 400,
      lineHeight: 1
    }
  }, open === i ? '−' : '+')), open === i && /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      color: 'var(--dw-graphite)',
      paddingBottom: 28,
      maxWidth: 640
    }
  }, a))))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Contact",
    title: "Tell us about your group.",
    lead: "Dates, numbers, what you\u2019d like to get up to \u2014 we\u2019ll come back to you within one working day."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dw-wrap dw-split",
    style: {
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "dw-list dw-body"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Phone"), /*#__PURE__*/React.createElement("span", null, "0345 371 9548")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dw-graphite)'
    }
  }, "Address"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Brecon, Powys LD3 7YS"))), /*#__PURE__*/React.createElement(Photo, {
    id: "contact-photo",
    label: "Group in the valley",
    style: {
      aspectRatio: '4/3'
    }
  })), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dw-green)',
      color: 'var(--dw-cream)',
      borderRadius: 'var(--radius-card)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dw-h3"
  }, "Thanks \u2014 we\u2019re on it."), /*#__PURE__*/React.createElement("p", {
    className: "dw-body",
    style: {
      opacity: .85
    }
  }, "We\u2019ll reply within one working day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "dw-field"
  }, "Name", /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("label", {
    className: "dw-field"
  }, "Email", /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("label", {
    className: "dw-field"
  }, "Group type", /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Friends & family"), /*#__PURE__*/React.createElement("option", null, "Team / company"), /*#__PURE__*/React.createElement("option", null, "School"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("label", {
    className: "dw-field"
  }, "Group size", /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "35",
    placeholder: "e.g. 24"
  })), /*#__PURE__*/React.createElement("label", {
    className: "dw-field",
    style: {
      gridColumn: '1 / -1'
    }
  }, "Message", /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    placeholder: "Dates, activities, catering\u2026"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
    arrow: true,
    type: "submit"
  }, "Send enquiry")))));
}
Object.assign(window, {
  Stay,
  Location,
  Prices,
  FAQ,
  Contact,
  PageHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowRight = __ds_scope.ArrowRight;

})();

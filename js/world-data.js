// js/world-data.js
// 월드 구조 공통 데이터 + 위치/건물 도우미

/* =========================================================
 *  1. 최상위 지역: COUNTRIES (= 왕국 / 제국 / 자유 도시 / 특수 지역)
 *  - world.html 에 있던 countries 배열을 여기로 옮김
 *  - realmClass: "kingdom" | "empire" | "free_city" | "special"
 * ======================================================= */

const COUNTRIES = [
  {
    id: 'north_frontier_city',
    realmClass: 'free_city',
    name: '북부 전선도시',
    region: '북부',
    faction: '무소속',
    level: '25~40',
    note: '북부 방어선 최전방, 끝없는 전쟁이 벌어지는 도시.',
    desc: `끝없는 회색 벽과 돌길 위에 세워진 북부 최대의 전선 도시.
끝없이 밀려오는 마물과의 전투가 이어지는 곳이다.`,
    badges: ['전선', '요새 도시'],
    x: 50,
    y: 12
  },
  {
    id: 'holy_kingdom',
    realmClass: 'kingdom',
    name: '산티아드 성왕국',
    region: '서부',
    faction: '교회',
    level: '15~25',
    note: '서부 북쪽의 신성 국가.',
    desc: `서부 북쪽의 고원 지대에 자리한 성스러운 왕국.
수많은 교단과 성기사단이 유명하다.`,
    badges: ['성왕국', '신성력'],
    x: 30,
    y: 30
  },
  {
    id: 'western_empire',
    realmClass: 'empire',
    name: '레헬른 제국',
    region: '서부',
    faction: '제국',
    level: '20~35',
    note: '서부의 20%를 차지하는 대제국.',
    desc: `온건한 기후의 서부 중 20%를 지배하는 강력한 제국.
마법사 계열과 장수들이 많이 배출되는 땅.`,
    badges: ['제국', '장수', '마법사'],
    x: 33,
    y: 55
  },
  {
    id: 'elf_kingdom',
    realmClass: 'kingdom',
    name: '네트라 왕국',
    region: '서부',
    faction: '엘프',
    level: '18~30',
    note: '서부 대수림과 맞닿은 엘프들의 나라.',
    desc: `대수림의 울창한 숲과 맞닿은 엘프들의 왕국.
외부인에게는 좀처럼 문을 열지 않는다.`,
    badges: ['엘프', '숲'],
    x: 45,
    y: 72
  },
  {
    id: 'central_rift_city',
    realmClass: 'free_city',
    name: '비슈라 균열 도시',
    region: '중부',
    faction: '자유',
    level: '10~20',
    note: '모든 모험이 교차하는 중심 도시.',
    desc: `정 중앙의 거대한 검보랏빛 대균열을 중심으로 세워진 거대 도시.
위에는 나라급 규모의 아카데미, 아래에는 철도관리국이 자리 잡고 있다.`,
    badges: ['대균열', '아카데미', '철도관리국'],
    x: 50,
    y: 48
  },
  {
    id: 'central_academy',
    realmClass: 'free_city',
    name: '엘람 아카데미',
    region: '중부',
    faction: '자유',
    level: '15~30',
    note: '대균열 위에 세워진 거대 아카데미.',
    desc: `대륙 전역의 인재가 모이는 초대형 아카데미.
여러 구역으로 나누어지며, 이곳에서 배출된 인재는 세계에 큰 기여를 하게된다.`,
    badges: ['아카데미', '마법사'],
    x: 55,
    y: 40
  },
  {
    id: 'eastern_great_forest',
    realmClass: 'special',
    name: '대수림',
    region: '동부',
    faction: '자유, 엘프',
    level: '5~15',
    note: '세계수와 수인들이 공존하는 숲.',
    desc: `온화한 기후의 동부 한가운데 자리한 거대한 숲.
그 중심에는 세계수와, 이를 수호하는 세력이 존재한다.`,
    badges: ['세계수', '수인', '온난 기후'],
    x: 82,
    y: 45
  },
  {
    id: 'eastern_human_kingdom',
    realmClass: 'kingdom',
    name: '라하트 왕국',
    region: '동부',
    faction: '라하트',
    level: '1~10',
    note: '초반 튜토리얼/시작 국가로 사용 가능.',
    desc: `대수림과 중부 사이, 비교적 안정적인 인간들의 왕국.
초보 모험가들이 가장 많이 시작하는 지역.`,
    badges: ['인간 왕국', '튜토리얼'],
    x: 60,
    y: 55
  },
  {
    id: 'eastern_beast_kingdom',
    realmClass: 'kingdom',
    name: '미트라 왕국',
    region: '동부',
    faction: '미트라',
    level: '8~18',
    note: '동양풍 문화, 수인 중심 국가.',
    desc: `동양풍 건축양식과 수인 문화가 혼재된 왕국.
인간 왕국과는 미묘한 긴장 관계를 유지 중.`,
    badges: ['동양풍', '수인'],
    x: 72,
    y: 68
  },
  {
    id: 'great_desert',
    realmClass: 'special',
    name: '데미카 대사막',
    region: '동부',
    faction: '자유',
    level: '20~35',
    note: '동부 끝자락의 광대한 사막 지대.',
    desc: `동부 대륙의 가장 동쪽 끝에 펼쳐진 대사막.
유랑 상단과 사막 마물들이 뒤섞여 위험한 지역이다.`,
    badges: ['사막', '유랑민'],
    x: 27,
    y: 75
  },
  {
    id: 'marei_island',
    realmClass: 'free_city',
    name: '마레이셀',
    region: '남부 해역',
    faction: '자유',
    level: '10~25',
    note: '남부 바다 위의 섬 국가.',
    desc: `남부 바다에 떠 있는 섬 국가 마레이.
육지와는 다른 문화와 기후를 지니고 있다.`,
    badges: ['섬', '해역'],
    x: 55,
    y: 90
  }
];

/* =========================================================
 *  2. REALMS: 캐릭터 position용 최상위 지역
 *  - 지금은 COUNTRIES 와 1:1 대응 (id 재사용)
 * ======================================================= */
const REALMS = COUNTRIES.map(c => ({
  id: c.id,
  type: c.realmClass || 'special',
  name: c.name,
  shortName: c.name,
  x: c.x,
  y: c.y
}));

/* =========================================================
 *  3. 하위 지역: CITIES / VILLAGES
 *  - 왕국/자유도시 안의 대도시/도시/마을
 *  - 필요하면 추후 자유롭게 추가/수정 가능
 * ======================================================= */

// 대도시 / 도시
const CITIES = [
  // 라하트 왕국
  {
    id: "city_rahat_capital",
    realmId: "eastern_human_kingdom",
    type: "big_city",   // big_city | city
    name: "라하트 왕도"
  },
  {
    id: "city_rahat_border",
    realmId: "eastern_human_kingdom",
    type: "city",
    name: "국경 도시 크레바"
  },

  // 마레이셀 (섬 국가)
  {
    id: "city_marei_harbor",
    realmId: "marei_island",
    type: "big_city",
    name: "마레이셀 항구도시"
  },

  // 레헬른 제국
  {
    id: "city_leharn_capital",
    realmId: "western_empire",
    type: "big_city",
    name: "황도 레헬른"
  },

  // 비슈라 균열 도시 내부 구역들
  {
    id: "city_vishura_upper",
    realmId: "central_rift_city",
    type: "big_city",
    name: "비슈라 상부구역"
  },
  {
    id: "city_vishura_lower",
    realmId: "central_rift_city",
    type: "city",
    name: "비슈라 하부·철도 관리국"
  }
];

// 마을
const VILLAGES = [
  // 라하트 왕국
  {
    id: "village_rahat_plain",
    cityId: "city_rahat_capital",
    name: "초원 마을 베일"
  },
  {
    id: "village_rahat_farm",
    cityId: "city_rahat_border",
    name: "변경 농촌 그레인"
  },

  // 마레이셀
  {
    id: "village_marei_fish",
    cityId: "city_marei_harbor",
    name: "어촌 마을 리도"
  },

  // 비슈라 균열 도시 인근
  {
    id: "village_vishura_outpost",
    cityId: "city_vishura_lower",
    name: "균열 관측소"
  }
];

/* =========================================================
 *  4. BUILDINGS: 하위 지역 내 건물 & 기능
 *  - kind: guild / shop / inn / post / church / academy / rail / harbor 등
 *  - features: 실제 기능 코드 (모험가 등록, 우편함, 상점, 던전 입구 등)
 * ======================================================= */

const BUILDINGS = [
  // 라하트 왕국 - 튜토리얼 구역
  {
    id: "b_rahat_guild",
    realmId: "eastern_human_kingdom",
    cityId: "city_rahat_capital",
    villageId: null,
    kind: "guild",
    name: "라하트 모험가 길드",
    features: ["adventurer_registration", "quest_board", "party_match"]
  },
  {
    id: "b_rahat_inn",
    realmId: "eastern_human_kingdom",
    cityId: "city_rahat_capital",
    villageId: null,
    kind: "inn",
    name: "왕도 여관 '따뜻한 모닥불'",
    features: ["rest_hp_mp", "time_skip"]
  },
  {
    id: "b_rahat_shop",
    realmId: "eastern_human_kingdom",
    cityId: "city_rahat_capital",
    villageId: null,
    kind: "shop",
    name: "라하트 상점가",
    features: ["buy_item", "sell_item"]
  },
  {
    id: "b_rahat_border_post",
    realmId: "eastern_human_kingdom",
    cityId: "city_rahat_border",
    villageId: null,
    kind: "post",
    name: "크레바 우편소",
    features: ["player_mailbox", "item_delivery"]
  },

  // 마레이셀 - 섬 국가
  {
    id: "b_marei_harbor",
    realmId: "marei_island",
    cityId: "city_marei_harbor",
    villageId: null,
    kind: "harbor",
    name: "마레이셀 항구",
    features: ["sea_travel", "fishing_spot"]
  },
  {
    id: "b_marei_inn",
    realmId: "marei_island",
    cityId: "city_marei_harbor",
    villageId: null,
    kind: "inn",
    name: "바닷바람 여관",
    features: ["rest_hp_mp"]
  },

  // 비슈라 균열 도시
  {
    id: "b_vishura_academy",
    realmId: "central_rift_city",
    cityId: "city_vishura_upper",
    villageId: null,
    kind: "academy",
    name: "엘람 부속 학원 구역",
    features: ["learn_skill", "upgrade_proficiency"]
  },
  {
    id: "b_vishura_rail",
    realmId: "central_rift_city",
    cityId: "city_vishura_lower",
    villageId: null,
    kind: "rail",
    name: "철도관리국",
    features: ["fast_travel", "raid_departure"]
  },
  {
    id: "b_vishura_guild",
    realmId: "central_rift_city",
    cityId: "city_vishura_upper",
    villageId: null,
    kind: "guild",
    name: "비슈라 중앙 모험가 길드",
    features: ["adventurer_registration", "quest_board", "achievement_claim"]
  }
];

/* =========================================================
 *  5. 헬퍼 함수들 (character.html / world.html 등에서 공통 사용)
 * ======================================================= */

function findRealmById(id) {
  if (!id || !Array.isArray(REALMS)) return null;
  return REALMS.find(r => r.id === id) || null;
}

function findCityById(id) {
  if (!id || !Array.isArray(CITIES)) return null;
  return CITIES.find(c => c.id === id) || null;
}

function findVillageById(id) {
  if (!id || !Array.isArray(VILLAGES)) return null;
  return VILLAGES.find(v => v.id === id) || null;
}

function findCountryById(id) {
  if (!id || !Array.isArray(COUNTRIES)) return null;
  return COUNTRIES.find(c => c.id === id) || null;
}

/**
 * 캐릭터 position 객체를 받아서
 * "라하트 왕국 / 라하트 왕도 / 초원 마을 베일" 처럼 만들어줌
 *
 * @param {Object} pos - { realmId, cityId, villageId } 형태
 * @returns {string}   - 사람이 읽을 수 있는 위치 문자열
 */
function makeLocationLabel(pos) {
  if (!pos) return "현재 위치: 미배정";

  const realm   = pos.realmId   ? findRealmById(pos.realmId)   : null;
  const city    = pos.cityId    ? findCityById(pos.cityId)     : null;
  const village = pos.villageId ? findVillageById(pos.villageId) : null;

  const parts = [];
  if (realm)   parts.push(realm.name);
  if (city)    parts.push(city.name);
  if (village) parts.push(village.name);

  if (!parts.length) {
    return "현재 위치: 미배정";
  }
  return "현재 위치: " + parts.join(" / ");
}
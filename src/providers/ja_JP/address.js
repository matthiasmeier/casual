var provider = {
	city_prefixes: ['北', '東', '西', '南', '新'],

	city_suffixes: ['市', '町', '村'],

	states: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],

	street_suffixes: ['', '通り'],

	countries: ['アイスランド', 'アイルランド', 'アゼルバイジャン', 'アフガニスタン', 'アラブ首長国連邦', 'アルジェリア', 'アルゼンチン', 'アルバ', 'アルバニア', 'アルメニア', 'アンギラ', 'アンゴラ', 'アンティグア・バーブーダ', 'アンドラ', 'イエメン', 'イスラエル', 'イタリア', 'イラク', 'イラン', 'インド', 'インドネシア', 'ウェーク島', 'ウガンダ', 'ウクライナ', 'ウズベキスタン', 'ウルグアイ', '英国', '英領インド洋地域', '英領バージン諸島', 'エクアドル', 'エジプト', 'エストニア', 'エチオピア', 'エリトリア', 'エルサルバドル', 'オーストラリア', 'オーストリア', 'オマーン', 'オランダ', 'オランダ領アンティル', 'カーボヴェルデ', 'カザフスタン', 'カシミール', 'カタール', 'カナダ', 'カメルーン', 'カンボジア', 'ガーナ', 'ガイアナ', 'ガボン', 'ガンビア', '北朝鮮', '北マリアナ諸島', 'キプロス', 'キューバ', 'キリバス', 'キルギス', 'ギニア', 'ギニアビサウ', 'ギリシャ', 'クウェート', 'クック諸島', 'クリスマス島', 'クロアチア', 'グアテマラ', 'グアドループ島', 'グアム', 'グリーンランド', 'グレナダ', 'ケイマン諸島', 'ケニア', 'コートジボワール', 'ココス諸島', 'コスタリカ', 'コモロ連合', 'コロンビア', 'コンゴ共和国', 'コンゴ民主共和国', 'サウジアラビア', 'サモア', 'サントメ・プリンシペ', 'サンピエール島・ミクロン島', 'サンマリノ', 'ザンビア', 'シエラレオネ', 'シリア', 'シンガポール', 'ジブチ', 'スバールバル諸島・ヤンマイエン諸島', 'ジャマイカ', 'ジョージア', 'ジョンストン島', 'ジンバブエ', 'スーダン', 'スイス', 'スウェーデン', 'チャネル諸島', 'スペイン', 'スリナム', 'スリランカ', 'スロバキア', 'スロベニア', 'スワジランド', 'セイシェル', '赤道ギニア', 'セネガル', 'セルビア', 'セントクリストファー・ネイビス', 'セントビンセント及びグレナディーン諸島', 'セントヘレナ島', 'セントルシア', 'ソマリア', 'ソロモン諸島', 'タークス諸島・カイコス諸島', 'タイ', '台湾', 'タジキスタン', 'タンザニア', '大韓民国', 'チェコ', 'チャド', 'フェロー諸島', '中央アフリカ', '中国', 'チュニジア', 'チリ', 'ツバル', 'デンマーク', 'トーゴ', 'トケラウ諸島', 'トリニダード・トバゴ', 'トルクメニスタン', 'トルコ', 'トンガ', 'ドイツ', 'ドミニカ共和国', 'ドミニカ国', 'ナイジェリア', 'ナウル', 'ナミビア', '南極大陸', 'ニウエ', 'ニカラグア', '西サハラ', 'ニジェール', 'ニューカレドニア', 'ニュージーランド', 'ネパール', 'ノーフォーク島', 'ノルウェー', 'ハイチ', 'ハンガリー', 'バーレーン', 'バチカン市国', 'バヌアツ', 'バハマ', 'バミューダ諸島', 'バルバドス', 'バングラディシュ', 'パキスタン', 'パナマ', 'パプアニューギニア', 'パラオ', 'パラグアイ', 'パレスチナ', '東ティモール', 'ピトケアン島', 'フィジー諸島', 'フィリピン', 'フィンランド', 'マン島', 'フォークランド（マルビナス）諸島', 'フランス', 'フランス領ギアナ', 'フランス領ポリネシア', 'ブータン', 'ブラジル', 'ブルガリア', 'ブルキナファソ', 'ブルネイ', 'ブルンジ', 'プエルトリコ', '米国', '米領サモア', '米領バージン諸島', 'ベトナム', 'ベナン', 'ベネズエラ', 'ベラルーシ', 'ベリーズ', 'ベルギー', 'ペルー', '香港', 'ホンジュラス', 'ボスニア・ヘルツェゴビナ', 'ボツワナ', 'ボリビア', 'ポーランド', 'ポルトガル', 'マーシャル諸島', 'マイヨット島', 'マカオ', 'マケドニア旧ユーゴスラビア', 'マダガスカル', 'マラウイ', 'マリ', 'マルタ', 'マルチニーク島', 'マレーシア', 'ミクロネシア連邦', 'ミッドウェー諸島', '南アフリカ', 'ミャンマー', 'メキシコ', 'モーリシャス', 'モーリタニア', 'モザンビーク', 'モナコ', 'モルディブ', 'モルドバ', 'モロッコ', 'モンゴル', 'モンセラット', 'モンテネグロ', 'ヨルダン', 'ラオス', 'ラトビア', 'リトアニア', 'リヒテンシュタイン', 'リビア', 'リベリア', 'ルーマニア', 'ジブラルタル', 'ルクセンブルク', 'ルワンダ', 'レソト', 'レバノン', 'レユニオン', 'ロシア', 'ワリス・フテュナ諸島'],

	zip_formats: ['###-####'],

	building_number_formats: ['##', '###', '####'],

	city_formats: [
		'{{city_prefix}}{{last_name}}{{city_suffix}}',
		'{{city_prefix}}{{last_name}}',
		'{{last_name}}{{city_suffix}}',
	],

	street_formats: [
		'{{last_name}}{{street_suffix}}',
		'{{last_name}}{{street_suffix}}'
	],

	address1_formats: ['##丁目'],

	address2_formats: ['##番地'],

	address_formats: [
		'{{zip}}\n{{state}}{{city}}{{address1}}',
	],

	country: function() {
		return this.random_element(this.countries);
	},

	state: function() {
		return this.random_element(this.states);
	},

	city_prefix: function() {
		return this.random_element(this.city_prefixes);
	},

	city_suffix: function() {
		return this.random_element(this.city_suffixes);
	},

	city: function() {
		return this.populate_one_of(this.city_formats);
	},

	zip: function(digits) {
		if (digits === 5) {
			return this.numerify(this.zip_formats[0]);
		} else if (digits === 9) {
			return this.numerify(this.zip_formats[1]);
		} else {
			return this.numerify(this.random_element(this.zip_formats));
		}
	},

	street_suffix: function() {
		return this.random_element(this.street_suffixes);
	},

	street: function() {
		return this.populate_one_of(this.street_formats);
	},

	address: function() {
		return this.populate_one_of(this.address_formats);
	},

	address1: function() {
		return this.numerify(this.random_element(this.address1_formats));
	},

	address2: function() {
		return this.numerify(this.random_element(this.address2_formats));
	},

	latitude: function () {
		return (this.integer(180 * 10000) / 10000.0 - 90.0).toFixed(4);
	},

	longitude: function () {
		return (this.integer(360 * 10000) / 10000.0 - 180.0).toFixed(4);
	},

	building_number: function() {
		return this.numerify(this.random_element(this.building_number_formats));
	}
};

module.exports = provider;
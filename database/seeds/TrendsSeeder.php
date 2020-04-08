<?php

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class TrendsSeeder extends Seeder
{
  private $trendsList = [
    'Начальник головного управління, управління (самостіного відділу, служби) охорони здоров\'я місцевої державної адміністрації',
    'Заступник начальника головного управління, управління (самостіного відділу, служби) охорони здоров\'я місцевої державної адміністрації',
    'Головний лікар обласної, центральної міської, міської, центральної районної та районної лікарень',
    'Заступник головного лікаря обласної, центральної міської, міської, центральної районної та районної лікарень',
    'Головний державний санітарний лікар',
    'Головна медична сестра',
    'Завідувач аптеки (аптечного закладу)',
    'Завідувач аптечної бази(складу)',
    'Завідувач відділу (аптеки, аптечної бази, складу)',
    'Завідувач кухні (молочної)',
    'Завідувач лабораторії (контрольно-аналітичної)',
    'Начальник (Завідувач) лікувально-профілактичного закладу',
    'Начальник (Завідувач) структурного підрозділу медичного закладу',
    'Лікар',
    'Лікар з авіаційної медицини',
    'Лікар-акушер-гінеколог',
    'Лікар-алерголог',
    'Лікар-алерголог дитячий',
    'Лікар-анестезіолог',
    'Лікар-анестезіолог дитячий',
    'Лікар-гастроентеролог',
    'Лікар-гастроентеролог дитячий',
    'Лікар-гематолог',
    'Лікар-гематолог дитячий',
    'Лікар-генетик',
    'Лікар-геріатр',
    'Лікар-гінеколог дитячого та підліткового віку',
    'Лікар-гінеколог-онколог',
    'Лікар-дерматовенеролог',
    'Лікар-дерматовенеролог дитячий',
    'Лікар-ендокринолог',
    'Лікар-ендокринолог дитячий',
    'Лікар загальної практики - Сімейний лікар',
    'Лікар-імунолог',
    'Лікар-імунолог дитячий',
    'Лікар-імунолог клінічний',
    'Лікар-інфекціоніст',
    'Лікар-інфекціоніст дитячий',
    'Лікар-кардіолог',
    'Лікар-кардіоревматолог дитячий',
    'Лікар-комбустіолог',
    'Лікар-методист',
    'Лікар-нарколог',
    'Лікар-нарколог дільничний',
    'Лікар з народної та нетрадиційної медицини',
    'Лікар-невропатолог',
    'Лікар-невролог дитячий',
    'Лікар-нейрохірург',
    'Лікар-нейрохірург дитячий',
    'Лікар-нефролог',
    'Лікар-нефролог дитячий',
    'Лікар-онколог',
    'Лікар-онколог дитячий',
    'Лікар-ортопед-травматолог',
    'Лікар-ортопед-травматолог дитячий',
    'Лікар-отоларинголог',
    'Лікар-отоларинголог дитячий',
    'Лікар-отоларинголог-ОНКОЛОГ',
    'Лікар-офтальмолог',
    'Лікар-офтальмолог дитячий',
    'Лікар-педіатр',
    'Лікар-педіатр дільничний',
    'Лікар-педіатр-неонатолог',
    'Лікар приймальної палати (відділення)',
    'Лікар з променевої терапії',
    'Лікар-психіатр',
    'Лікар-психіатр дитячий',
    'Лікар-психіатр дитячий дільничний',
    'Лікар-психіатр дільничний',
    'Лікар-психіатр підлітковий',
    'Лікар-психіатр підлітковий дільничний',
    'Лікар-психолог',
    'Лікар-психотерапевт',
    'Лікар-психофізіолог',
    'Лікар-пульмонолог',
    'Лікар-пульмонолог дитячий',
    'Лікар пункту охорони здоров\'я',
    'Лікар-радіолог',
    'Лікар з радіонуклідної діагностики',
    'Лікар-ревматолог',
    'Лікар-рефлексотерапевт',
    'Лікар-сексопатолог',
    'Лікар станції (відділення) швидкої та невідкладної медичної допомоги',
    'Лікар судновий',
    'Лікар-сурдолог',
    'Лікар-терапевт',
    'Лікар-терапевт дільничний',
    'Лікар-терапевт підлітковий',
    'Лікар-терапевт цехової лікарської дільниці',
    'Лікар-токсиколог',
    'Лікар-трансплантолог',
    'Лікар-трансфузіолог',
    'Лікар з ультразвукової діагностики',
    'Лікар-уролог',
    'Лікар-уролог дитячий',
    'Лікар-фтизіатр',
    'Лікар-фтизіатр дитячий',
    'Лікар-фтизіатр дільничний',
    'Лікар-хірург',
    'Лікар-хірург дитячий',
    'Лікар-хірург-онколог',
    'Лікар-хірург-проктолог',
    'Лікар-хірург серцево-судинний',
    'Лікар-хірург судинний',
    'Лікар-хірург тор',
    'Професіонали в галузі стоматології',
    'Лікар-стоматолог',
    'Лікар-стоматолог дитячий',
    'Лікар-стоматолог-ортодонт',
    'Лікар-стоматолог-ортопед',
    'Лікар-стоматолог-терапевт',
    'Лікар-стоматолог-хірург',
    'Професіонали в галузі фармації',
    'Провізор',
    'Провізор-аналітик',
    'Провізор клінічний',
    'Провізор-косметолог',
    'Професіонали в галузі медико-профілактичної справи',
    'Лікар-бактеріолог',
    'Лікар-вірусолог',
    'Лікар-мікробіолог-вірусолог',
    'Лікар з гігієни дітей та підлітків',
    'Лікар з гігієни праці',
    'Лікар з гігієни харчування',
    'Лікар-дезінфекціоніст',
    'Лікар-епідеміолог',
    'Лікар із загальної гігієни',
    'Лікар з комунальної гігієни',
    'Лікар-паразитолог',
    'Лікар-профпатолог',
    'Лікар з радіаційної гігієни',
    'Лікар-санолог',
    'Інші професіонали в галузі медицини',
    'Інспектор-лікар',
    'Лікар-дієтолог',
    'Лікар-ендоскопіст',
    'Лікар-лаборант',
    'Лікар-лаборант-генетик',
    'Лікар-лаборант-гігієніст',
    'Лікар-лаборант-гігієніст з дослідження фізичних факторів навколишнього середовища',
    'Лікар-лаборант-гігієніст з дослідження хімічних факторів навколишнього середовища',
    'Лікар-лаборант-імунолог',
    'Лікар-лаборант з клінічної біохімії',
    'Лікар з лікувальної фізкультури',
    'Лікар з лікувальної фізкультури і спортивної медицини',
    'Лікар-патологоанатом',
    'Лікар патологоанатом дитячий',
    'Лікар-рентгенолог',
    'Лікар зі спортивної медицини',
    'Лікар-статистик',
    'Лікар — Судово-медичний експерт-гістолог',
    'Лікар — Судово-медичний експерт',
    'Лікар — Судово-медичний експерт-імунолог',
    'Лікар — Судово-медичний експерт-криміналіст',
    'Лікар — Судово-медичний експерт-токсиколог',
    'Лікар — Судово-медичний експерт-цитолог',
    'Лікар — Судово-психіатрічний експерт',
    'Лікар-фізіотерапевт',
    'Лікар з функціональної діагностики',
    'Акушерка',
    'Акушерка жіночої консультації',
    'Акушерка стаціонару',
    'Інструктор-дезінфектор',
    'Інструктор із санітарної освіти',
    'Інструктор з трудової терапії',
    'Лаборант з бактеріології',
    'Лаборант з імунології',
    'Лаборант Клініко-діагностичної лабораторії',
    'Лаборант (Медицина)',
    'Лаборант з патологоанатомічних досліджень',
    'Лаборант Санітарно-гігієнічної лабораторії',
    'Лаборант Судово-медичної лабораторії',
    'Лаборант (Фармація)',
    'Лікар зубний',
    'Лікар-інтерн',
    'Лікар-стажист',
    'Оптометрист',
    'Помічник лікаря-епідеміолога',
    'Помічник лікаря-стоматолога',
    'Провізор-інтерн',
    'Рентгенолаборант',
    'Сестра медична',
    'Сестра медична-анестезіст',
    'Сестра медична дитячої поліклініки',
    'Сестра медична дитячого стаціонару',
    'Сестра медична з дієтичного харчування',
    'Сестра медична з косметичних процедур',
    'Сестра медична з лікувальної фізкультури',
    'Сестра медична з масажу',
    'Сестра медична операційна',
    'Сестра медична патронажно',
    'Сестра медична поліклініки',
    'Сестра медична станції (відділення) швидкої та невідкладної медичної допомоги',
    'Сестра медична старша',
    'Сестра медична стаціонару',
    'Сестра медична зі стоматології',
    'Сестра медична з фізіотерапії',
    'Сестра медична з функціональної діагностики',
    'Статистик медичний',
    'Технік зубний',
    'Технік-ортезист-гіпсовиливальник',
    'Фармацевт',
    'Фельдшер',
    'Фельдшер-лаборант',
    'Фельдшер санітарний',
    'Фельдшер із санітарної освіти',
    'Фельдшер станції (відділення) швидкої та невідкладної медичної допомоги',
  ];

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    foreach ($this->trendsList as $trend) {
      $trend = \App\Models\Trends::UpdateOrCreate([
        'name' => $trend
      ]);
    }
  }
}

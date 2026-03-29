import { Injectable, inject } from '@angular/core';
import { NewsItem, NewsItemData } from '../models/news.model';
import { TranslationService } from './translation.service';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private i18n = inject(TranslationService);

  private readonly newsData: NewsItemData[] = [
    {
      slug: 'subsidiya-odenislerine-baslanib',
      title: {
        az: 'Subsidiya ödənişlərinə başlanılıb',
        en: 'Subsidy payments have started',
      },
      description: {
        az: `Aqrar Kredit və İnkişaf Agentliyi (AKİA) 2025–2026-cı əkin ili üzrə subsidiya ödənişlərinin ilkin mərhələsinə start verib.

Agentlikdən verilən məlumata görə, payızlıq əkinlər üzrə 217 min 617 fermerin kartlarına 77 milyon 154 min manat məbləğində subsidiya köçürülüb. Ödənişlər təxminən 391 min hektar əkin sahəsini əhatə edir.

Qeyd edək ki, fermerlər kartlarına köçürülmüş vəsaitin 25 faizini nağd, 75 faizini isə qeyri-nağd qaydada istifadə edə bilərlər. Qeyri-nağd vəsaitlər mineral gübrə, pestisid, biohumus, herbisid və toxumların alınmasına sərf oluna bilər. Fermerlər subsidiya vəsaitini meyvə bağlarında müasir suvarma sistemlərinin alınması və quraşdırılması məqsədilə də istifadə edə bilərlər.

Hazırda Elektron Kənd Təsərrüfatı İnformasiya Sistemində (EKTİS) bəyan edilmiş payızlıq əkinlər üzrə məlumatların və torpaq sənədlərinin yoxlanılması davam edir. Monitorinqləri başa çatan və tələb olunan sənədləri sistemə daxil edən fermerlərin ödənişləri mərhələli qaydada həyata keçirilir.

Subsidiyaların ödənişi davam edəcək.`,
        en: `The Agricultural Credit and Development Agency (AKIA) has launched the initial phase of subsidy payments for the 2025–2026 crop year.

According to the Agency, subsidies totaling 77 million 154 thousand manats have been transferred to the cards of 217,617 farmers for autumn crops. The payments cover approximately 391 thousand hectares of cultivated land.

It should be noted that farmers can use 25 percent of the funds transferred to their cards in cash and 75 percent in non-cash form. Non-cash funds can be spent on purchasing mineral fertilizers, pesticides, biohumus, herbicides, and seeds. Farmers can also use subsidy funds for purchasing and installing modern irrigation systems in orchards.

Currently, the verification of data and land documents declared in the Electronic Agricultural Information System (EKTIS) for autumn crops continues. Payments for farmers who have completed monitoring and submitted the required documents to the system are being made in stages.

Subsidy payments will continue.`,
      },
      image: 'images/news/subsidiya-odenislerine-baslanib.jpg',
      date: '2026-03-10',
    },
      {
      slug: 'calilabad-agrar-biznes-festivali',
      title: {
        az: 'Cəlilabad rayonunda Aqrar Biznes Festivalı keçirilib',
        en: 'Cəlilabad rayonunda Aqrar Biznes Festivalı keçirilib',
      },
      description: {
        az: `Cəlilabad rayonunda Kənd Təsərrüfatı Nazirliyinin Aqrar İnnovasiya Mərkəzi, Elm və Təhsil Nazirliyi yanında Peşə Təhsili üzrə Dövlət Agentliyi, Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi yanında Dövlət Məşğulluq Agentliyi və Cəlilabad Rayon İcra Hakimiyyətinin birgə təşkilatçılığı ilə Aqrar Biznes Festivalı keçirilib.

Cəlilabad Dövlət Peşə Təhsil Mərkəzinin ərazisində təşkil olunan festivalın məqsədi aqrar sahədə fəaliyyət göstərən fermerləri, sahibkarları, startapçıları və dövlət qurumlarını bir araya gətirmək, kənd təsərrüfatında innovativ yanaşmaların tətbiqini təşviq etmək, eləcə də aqrar biznes imkanlarını geniş ictimaiyyətə təqdim etmək olub.

Festivalın açılış mərasimində çıxış edən kənd təsərrüfatı naziri Məcnun Məmmədov bildirib ki, aqrar sahədə həyata keçirilən sistemli islahatlar, fermer və sahibkarlara göstərilən dövlət dəstəyi, eləcə də müasir texnologiyaların tətbiqi kənd təsərrüfatının dayanıqlı inkişafına mühüm töhfə verir: “Bu gün kənd təsərrüfatı yalnız istehsal sahəsi kimi deyil, həm də innovasiya, texnologiya və sahibkarlığın qovuşduğu strateji iqtisadi istiqamətlərdən birinə çevrilməkdədir. Aqrar sahədə rəqəmsal həllərin tətbiqi, startap təşəbbüslərinin təşviqi, elmi biliklərin və müasir texnologiyaların praktikaya inteqrasiyası sektorun rəqabət qabiliyyətliliyinin artırılmasına xidmət edir”.

Açılış mərasimində çıxış edən Cəlilabad Rayon İcra Hakimiyyətinin başçısı Rafiq Cəlilov, elm və təhsil naziri Emin Əmrullayev, əmək və əhalinin sosial müdafiəsi naziri Anar Əliyev, Aqrar İnnovasiya Mərkəzinin direktoru Anar Cəfərov və Peşə Təhsili üzrə Dövlət Agentliyinin direktoru İlqar Bayramlı ölkəmizdə kənd təsərrüfatının inkişafının dövlət siyasətinin prioritet istiqamətlərindən biri olduğunu vurğulayaraq, aqrar sahədə innovasiyaların tətbiqinin, peşə təhsilinin inkişafının və məşğulluq imkanlarının genişləndirilməsinin əhəmiyyətindən bəhs ediblər. Natiqlər qeyd ediblər ki, bu kimi festivallar fermerlər, gənclər və sahibkarlar üçün yeni əməkdaşlıq və inkişaf imkanları yaradır.

Çıxışlardan sonra Aqrar Biznes Festivalında fəal iştirakına və tədbirin təşkilinə göstərdikləri dəstəyə görə bir sıra qurum və təşkilatların nümayəndələri təşəkkürnamələrlə təltif olunublar.

Açılış mərasimindən sonra iştirakçılar sərgi sahəsinə baxış keçiriblər. Festivalın sərgi bölməsində Kənd Təsərrüfatı Nazirliyinin tabeli qurumları, Dövlət Məşğulluq Agentliyinin, Peşə Təhsili üzrə Dövlət Agentliyinin nəzdində fəaliyyət göstərən 10-dan artıq dövlət peşə təhsil mərkəzi, eləcə də aqrar sahədə fəaliyyət göstərən müxtəlif şirkətlər öz xidmət və məhsullarını nümayiş etdiriblər.

Tədbir iştirakçıları həmçinin Cəlilabad Dövlət Peşə Təhsil Mərkəzində “Dəqiq kənd təsərrüfatında süni intellektin tətbiqi” layihəsi çərçivəsində təşkil olunan “Bootcamp” proqramının iştirakçıları ilə görüşüblər. Görüş zamanı “Bootcamp” iştirakçıları hazırladıqları layihələr və aqrar sahədə innovativ texnologiyaların tətbiqi imkanları ilə bağlı təqdimatlar ediblər. Sərgi çərçivəsində yaradılmış startap zonasında aqrar startapçılar innovativ layihə və həllərini təqdim ediblər. Bununla da startapçılar fermer və sahibkarlarla birbaşa ünsiyyət quraraq öz ideyalarını təqdim etmək və potensial əməkdaşlıq imkanlarını müzakirə etmək imkanı əldə ediblər.`,
        en: `Cəlilabad rayonunda Kənd Təsərrüfatı Nazirliyinin Aqrar İnnovasiya Mərkəzi, Elm və Təhsil Nazirliyi yanında Peşə Təhsili üzrə Dövlət Agentliyi, Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi yanında Dövlət Məşğulluq Agentliyi və Cəlilabad Rayon İcra Hakimiyyətinin birgə təşkilatçılığı ilə Aqrar Biznes Festivalı keçirilib.

Cəlilabad Dövlət Peşə Təhsil Mərkəzinin ərazisində təşkil olunan festivalın məqsədi aqrar sahədə fəaliyyət göstərən fermerləri, sahibkarları, startapçıları və dövlət qurumlarını bir araya gətirmək, kənd təsərrüfatında innovativ yanaşmaların tətbiqini təşviq etmək, eləcə də aqrar biznes imkanlarını geniş ictimaiyyətə təqdim etmək olub.

Festivalın açılış mərasimində çıxış edən kənd təsərrüfatı naziri Məcnun Məmmədov bildirib ki, aqrar sahədə həyata keçirilən sistemli islahatlar, fermer və sahibkarlara göstərilən dövlət dəstəyi, eləcə də müasir texnologiyaların tətbiqi kənd təsərrüfatının dayanıqlı inkişafına mühüm töhfə verir: “Bu gün kənd təsərrüfatı yalnız istehsal sahəsi kimi deyil, həm də innovasiya, texnologiya və sahibkarlığın qovuşduğu strateji iqtisadi istiqamətlərdən birinə çevrilməkdədir. Aqrar sahədə rəqəmsal həllərin tətbiqi, startap təşəbbüslərinin təşviqi, elmi biliklərin və müasir texnologiyaların praktikaya inteqrasiyası sektorun rəqabət qabiliyyətliliyinin artırılmasına xidmət edir”.

Açılış mərasimində çıxış edən Cəlilabad Rayon İcra Hakimiyyətinin başçısı Rafiq Cəlilov, elm və təhsil naziri Emin Əmrullayev, əmək və əhalinin sosial müdafiəsi naziri Anar Əliyev, Aqrar İnnovasiya Mərkəzinin direktoru Anar Cəfərov və Peşə Təhsili üzrə Dövlət Agentliyinin direktoru İlqar Bayramlı ölkəmizdə kənd təsərrüfatının inkişafının dövlət siyasətinin prioritet istiqamətlərindən biri olduğunu vurğulayaraq, aqrar sahədə innovasiyaların tətbiqinin, peşə təhsilinin inkişafının və məşğulluq imkanlarının genişləndirilməsinin əhəmiyyətindən bəhs ediblər. Natiqlər qeyd ediblər ki, bu kimi festivallar fermerlər, gənclər və sahibkarlar üçün yeni əməkdaşlıq və inkişaf imkanları yaradır.

Çıxışlardan sonra Aqrar Biznes Festivalında fəal iştirakına və tədbirin təşkilinə göstərdikləri dəstəyə görə bir sıra qurum və təşkilatların nümayəndələri təşəkkürnamələrlə təltif olunublar.

Açılış mərasimindən sonra iştirakçılar sərgi sahəsinə baxış keçiriblər. Festivalın sərgi bölməsində Kənd Təsərrüfatı Nazirliyinin tabeli qurumları, Dövlət Məşğulluq Agentliyinin, Peşə Təhsili üzrə Dövlət Agentliyinin nəzdində fəaliyyət göstərən 10-dan artıq dövlət peşə təhsil mərkəzi, eləcə də aqrar sahədə fəaliyyət göstərən müxtəlif şirkətlər öz xidmət və məhsullarını nümayiş etdiriblər.

Tədbir iştirakçıları həmçinin Cəlilabad Dövlət Peşə Təhsil Mərkəzində “Dəqiq kənd təsərrüfatında süni intellektin tətbiqi” layihəsi çərçivəsində təşkil olunan “Bootcamp” proqramının iştirakçıları ilə görüşüblər. Görüş zamanı “Bootcamp” iştirakçıları hazırladıqları layihələr və aqrar sahədə innovativ texnologiyaların tətbiqi imkanları ilə bağlı təqdimatlar ediblər. Sərgi çərçivəsində yaradılmış startap zonasında aqrar startapçılar innovativ layihə və həllərini təqdim ediblər. Bununla da startapçılar fermer və sahibkarlarla birbaşa ünsiyyət quraraq öz ideyalarını təqdim etmək və potensial əməkdaşlıq imkanlarını müzakirə etmək imkanı əldə ediblər.`,
      },
      image: 'images/news/imageg_700_700_news_15_405_1.jpg_news_15.jpg',
      date: '2026-03-10',
    },
      {
      slug: 'shaftali-ve-gilasda-virus',
      title: {
        az: 'İdxal olunan şaftalı, nektarin və gilas tingində Şarka virusu aşkarlanıb',
        en: 'İdxal olunan şaftalı, nektarin və gilas tingində Şarka virusu aşkarlanıb',
      },
      description: {
        az: `İdxal olunan əkin-səpin materiallarına nəzarət tədbirləri çərçivəsində “Agro Plant” MMC, “Agroma” MMC, “Amogrovv” MMC və fiziki şəxs Eldarov Nahid Xanlar oğlunun Türkiyədən idxal etdiyi şaftalı, nektarin, gilas tingindən Qida Təhlükəsizliyi Agentliyinin müfəttişləri tərəfindən nümunələr götürülərək müayinələrə cəlb olunub.

Sınaq nəticəsində tinglərdə karantin tətbiq edilən Şarka virusu aşkarlanıb.

Faktla əlaqədar məhsul partiyasının gömrük ərazisinin hüdudlarından kənara çıxarılması, məhv edilməsi və ya utilizasiyası barədə qərar qəbul edilib. Sahibkarların müraciəti əsasında 15100 ədəd şaftalı, 3600 ədəd nektarin, 300 ədəd gilas tingi məhv edilib.

Qeyd edək ki, Şarka virusu bitkilərin inkişafını zəiflədir və məhsuldarlığı əhəmiyyətli dərəcədə azaldır.`,
        en: `İdxal olunan əkin-səpin materiallarına nəzarət tədbirləri çərçivəsində “Agro Plant” MMC, “Agroma” MMC, “Amogrovv” MMC və fiziki şəxs Eldarov Nahid Xanlar oğlunun Türkiyədən idxal etdiyi şaftalı, nektarin, gilas tingindən Qida Təhlükəsizliyi Agentliyinin müfəttişləri tərəfindən nümunələr götürülərək müayinələrə cəlb olunub.

Sınaq nəticəsində tinglərdə karantin tətbiq edilən Şarka virusu aşkarlanıb.

Faktla əlaqədar məhsul partiyasının gömrük ərazisinin hüdudlarından kənara çıxarılması, məhv edilməsi və ya utilizasiyası barədə qərar qəbul edilib. Sahibkarların müraciəti əsasında 15100 ədəd şaftalı, 3600 ədəd nektarin, 300 ədəd gilas tingi məhv edilib.

Qeyd edək ki, Şarka virusu bitkilərin inkişafını zəiflədir və məhsuldarlığı əhəmiyyətli dərəcədə azaldır.`,
      },
      image: 'images/news/virus-shaftali.jpg',
      date: '2026-03-10',
    },
  ];

  private localize(data: NewsItemData): NewsItem {
    const lang = this.i18n.currentLang();
    return {
      slug: data.slug,
      title: data.title[lang],
      description: data.description[lang],
      image: data.image,
      date: data.date,
    };
  }

  getAll(): NewsItem[] {
    return this.newsData.map((d) => this.localize(d));
  }

  getLatest(count: number): NewsItem[] {
    return this.newsData.slice(0, count).map((d) => this.localize(d));
  }

  getBySlug(slug: string): NewsItem | undefined {
    const data = this.newsData.find((n) => n.slug === slug);
    return data ? this.localize(data) : undefined;
  }
}

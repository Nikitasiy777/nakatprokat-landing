import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных — Накат Прокат",
  description: "Текст согласия на обработку персональных данных ИП Сироткин М.Д. (Накат Прокат).",
};

export default function PersonalDataPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", padding: "40px 0 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>

        {/* Назад */}
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "14px", fontWeight: 600, color: "var(--lime-dark)",
            textDecoration: "none", marginBottom: 32,
          }}
        >
          ← Вернуться на главную
        </Link>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "var(--text-primary)", marginBottom: 8, fontFamily: "var(--font-bebas), sans-serif", textTransform: "uppercase", letterSpacing: "0.02em" }}>
          Согласие на обработку персональных данных
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: 40, fontWeight: 500 }}>
          Версия от 16 апреля 2026 г.
        </p>

        <div style={{ background: "var(--bg-secondary)", border: "1.5px solid rgba(191,230,95,0.35)", borderRadius: "16px", padding: "24px 28px", marginBottom: 40, fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.8, fontWeight: 500 }}>
          <p>
            Настоящее Согласие на обработку персональных данных (далее — Согласие) предоставляется
            свободно, своей волей и в своём интересе субъектом персональных данных (далее — Субъект)
            оператору персональных данных:
          </p>
          <p style={{ marginTop: 12 }}>
            <strong style={{ color: "var(--text-primary)" }}>ИП Сироткин Максим Денисович</strong><br />
            ИНН: 023102950200 · ОГРН: 325028000199306<br />
            Адрес: 420029, Республика Татарстан, г. Казань, ул. Габдуллы Тукая, д. 113А<br />
            E-mail: <a href="mailto:nakatprokat@yandex.ru" style={{ color: "var(--lime-dark)" }}>nakatprokat@yandex.ru</a>
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <Section title="1. Состав персональных данных">
            <P>
              Субъект предоставляет Оператору следующие персональные данные:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>Фамилия, имя;</Li>
              <Li>Номер телефона;</Li>
              <Li>Адрес электронной почты (при наличии);</Li>
              <Li>Иные сведения, указанные Субъектом самостоятельно в форме обратной связи.</Li>
            </ul>
          </Section>

          <Section title="2. Цели обработки">
            <P>
              Персональные данные обрабатываются исключительно в следующих целях:
            </P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>Рассмотрение заявки на трудоустройство курьером и связь с Субъектом по данной заявке;</Li>
              <Li>Информирование об условиях работы, предоставляемых услугах и возможностях;</Li>
              <Li>Оформление необходимых документов (самозанятость и иные);</Li>
              <Li>Исполнение требований законодательства Российской Федерации.</Li>
            </ul>
          </Section>

          <Section title="3. Действия с персональными данными">
            <P>
              Оператор вправе осуществлять следующие действия с персональными данными:
              сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение),
              извлечение, использование, передачу (предоставление, доступ) в случаях, предусмотренных
              законодательством, обезличивание, блокирование, удаление, уничтожение.
            </P>
            <P>
              Обработка осуществляется как с использованием средств автоматизации,
              так и без их использования.
            </P>
          </Section>

          <Section title="4. Срок действия согласия">
            <P>
              Настоящее Согласие действует с момента его предоставления и до момента
              достижения целей обработки, но не более <strong style={{ color: "var(--text-primary)" }}>трёх лет</strong> с даты предоставления,
              либо до момента его отзыва.
            </P>
          </Section>

          <Section title="5. Отзыв согласия">
            <P>
              Субъект вправе в любое время отозвать настоящее Согласие, направив письменное
              заявление на адрес электронной почты:{" "}
              <a href="mailto:nakatprokat@yandex.ru" style={{ color: "var(--lime-dark)" }}>
                nakatprokat@yandex.ru
              </a>{" "}
              или по почтовому адресу Оператора.
            </P>
            <P>
              Отзыв Согласия не влечёт за собой уничтожение персональных данных в случаях,
              предусмотренных законодательством Российской Федерации.
            </P>
            <P>
              После получения отзыва Оператор прекращает обработку персональных данных
              и уничтожает их в срок, не превышающий 30 дней, если иное не предусмотрено
              договором или законодательством.
            </P>
          </Section>

          <Section title="6. Права субъекта персональных данных">
            <P>В соответствии с Федеральным законом № 152-ФЗ Субъект имеет право:</P>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>получать от Оператора сведения о наличии и составе обрабатываемых персональных данных;</Li>
              <Li>требовать уточнения, блокирования или уничтожения недостоверных данных;</Li>
              <Li>обжаловать действия Оператора в Роскомнадзор или в судебном порядке;</Li>
              <Li>на защиту своих прав и законных интересов, в том числе на возмещение убытков и компенсацию морального вреда.</Li>
            </ul>
          </Section>

          <div style={{ background: "rgba(191,230,95,0.1)", border: "1px solid rgba(191,230,95,0.4)", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.7, fontWeight: 500 }}>
              <strong style={{ color: "var(--text-primary)" }}>Способ выражения согласия:</strong> Субъект выражает настоящее Согласие путём
              проставления отметки (галочки) в соответствующем поле формы обратной связи
              на Сайте <strong>nakatprokat.ru</strong> и последующего нажатия кнопки
              «Отправить заявку».
            </p>
          </div>

          <P>
            С{" "}
            <Link href="/privacy" style={{ color: "var(--lime-dark)" }}>
              Политикой конфиденциальности
            </Link>{" "}
            Оператора Субъект ознакомлен.
          </P>

        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "14px", fontWeight: 600, color: "var(--lime-dark)", textDecoration: "none" }}>
            ← Вернуться на главную
          </Link>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", marginBottom: 14 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "15px", color: "var(--text-sub)", lineHeight: 1.7, fontWeight: 500 }}>
      {children}
    </p>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ fontSize: "15px", color: "var(--text-sub)", lineHeight: 1.7, fontWeight: 500 }}>
      {children}
    </li>
  );
}

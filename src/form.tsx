import React, { useState, useRef } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useIMask, IMaskInput, } from "react-imask";
import validator from 'validator'
const Form = () => {
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  // console.log("🚀 ~ file: form.js ~ line 11 ~ Form ~ soyad", soyad)
  const [email, setEmail] = useState("");
  const [tckimlik, setTckimlik] = useState("");
  const [dogum, setDogum] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [adres, setAdres] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");
  const [alan, setAlan] = useState("");
  const [dosya, setDosya] = useState("");
  const [formInfo, setFormInfo] = useState<string[]>([]);

  console.log("🚀 ~ file: form.js ~ line 21 ~ Form ~ formInfo", formInfo);

  const Info = (e: any) => {
    e.preventDefault();

    setFormInfo((prev: any) => {
      // console.log("prev",prev)

      return [
        ...prev,
        [
          ad,
          soyad,
          email,
          tckimlik,
          dogum,
          il,
          ilce,
          adres,
          cinsiyet,
          alan,
          dosya,
        ],
      ];
    });
  };
  const Kocaeli: string[] = [
    "Gebze",
    "Gölcük",
    "Kandıra",
    "Karamürsel",
    "Körfez",
    "Derince",
    "Başiskele",
    "Çayırova",
    "Darıca",
    "Dilovası",
    "İzmit",
    "Kartepe",
  ];
  const Aydin: string[] = [
    "Nazilli",
    "Söke",
    "Sultanhisar",
    "Yenipazar",
    "Buharkent",
    "İncirliova",
    "Karpuzlu",
    "Köşk",
    "Didim",
  ];

  const istanbul: string[] = [
    "Eyüp",
    "Fatih",
    "Gaziosmanpaşa",
    "Kadıköy",
    "Kartal",
    "Sarıyer",
    "Silivri",
    "Şile",
    "Şişli",
    "Üsküdar",
    "Zeytinburnu",
  ];
  let obj: { [key: string]: string[] } = {
    "09": Aydin,
    "41": Kocaeli,
    "34": istanbul,
  };

  const PhoneMask = "+{00}(0000)00-0000";
  const EmailMask = /^\S*@?\S*$/;
  const phoneEmailMask = [
    {
      mask: PhoneMask,
    },
    {
      mask: EmailMask,
    },
  ];

  const customMask = function (value: string) {
    var pattern = new RegExp(/^[a-z0-9]+$/i);
    console.log(value, pattern.test(value));
    return pattern.test(value);
  };


  const [emailError, setEmailError] = useState('')
  const validateEmail = (e: any) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Geçerli Email :)')
    } else {
      setEmailError('Lütfen Geçerli bir Email Giriniz hesapadi@ornek.com')
    }
  }


  const [checkedState, setCheckedState] = useState(
    new Array(alan.length).fill(false)
  );
  return (
    <form className="row g-3">
      <div className="col-md-6 was-validated">
        <label htmlFor="ad" className="form-label">
          Ad
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="ad"
          name="ad"
          placeholder="Ad Bilgilerinizi Giriniz."
          onChange={(e) => {
            setAd(e.currentTarget.value);
          }}
        />
      </div>
      <div className="col-md-6 was-validated">
        <label htmlFor="soyad" className="form-label">
          Soyad
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="soyad"
          name="soyad"
          placeholder="Soy Ad Bilgilerinizi Giriniz."
          onChange={(e) => {
            setSoyad(e.currentTarget.value);
          }}
        />
      </div>
      <div >
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Adresi
        </label>
        <input
          required
          className="form-control"
          id="email"
          name="email"
          placeholder="Email Adresi Bilgilerinizi Giriniz."
          onChange={(e) => {
            setEmail(e.currentTarget.value); validateEmail(e);
          }}></input>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </div>
      <div className="col-md-6 was-validated">
        <label htmlFor="tc kimlik" className="form-label">
          Tc Kimlik
        </label>
        <IMaskInput
          required
          type="text"
          className="form-control"
          id="tckimlik"
          name="tckimlik"
          maxLength={11}
          mask={Number}
          onAccept={(value:any, mask:any) => console.log(value, mask)}
          placeholder="Tc Kimlik Bilgilerinizi Giriniz."
          onChange={(e:any) => {
            setTckimlik(e.currentTarget.value);
          }}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="dogum" className="form-label">
          Doğum Tarihi
        </label>
        <IMaskInput
          id="dogum"
          name="dogum"
          className="form-control"
          mask={Date}
          onAccept={(value:any, mask:any) => console.log(value, mask)}
          placeholder="Doğum Tarihi Bilgilerinizi Giriniz."
          onChange={(e:any) => {
            setDogum(e.currentTarget.value);
          }}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">İl</label>
        <select
          id="il"
          className="form-select form-control"
          name="il"
          onChange={(e) => {
            setIl(e.currentTarget.value);
          }}
        >
          <option >İl seçiniz</option>
          <option value="34">İstanbul</option>
          <option value="09">Aydın</option>
          <option value="41">Kocaeli</option>
        </select>

      </div>
      <div className="col-md-6">
        <label htmlFor="ilce" className="form-label">
          İlçe
        </label>
        <select
          id="ilce"
          name="ilce"
          className="form-select form-control"
          aria-label="Default select example"
          onChange={(e) => {
            setIlce(e.currentTarget.value);
          }}
        >
          <option >İlçe seçiniz</option>
          {obj[il]?.map((e: string, i: number) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="adres" className="form-label">
          Adres
        </label>
        <input
          type="adres"
          className="form-control"
          id="adres"
          name="adres"
          placeholder="Adres Bilgilerinizi Giriniz."
          onChange={(e) => {
            setAdres(e.currentTarget.value);
          }}
        ></input>
      </div>
      <label className="col-md-6">Cinsiyet
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="cinsiyet"
            id="flexRadioDefault1"
            value="kadin"
            onChange={(e) => {
              setCinsiyet(e.currentTarget.value);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {" "}
            Kadın{" "}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="cinsiyet"
            id="flexRadioDefault2"
            value="erkek"
            onChange={(e) => {
              setCinsiyet(e.currentTarget.value);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {" "}
            Erkek{" "}
          </label>
        </div>
      </label>
      <label>İlgi alanları:</label>
      <label htmlFor="c1">
        <input
          type="checkbox"
          name="alan"
          value="Müzik"
          id="c1"
          onChange={(e) => {
            setAlan(e.currentTarget.value);
          }}
        />
        Müzik
      </label>
      <label htmlFor="c2">
        <input
          type="checkbox"
          name="alan"
          value="Resim"
          id="c2"
          onChange={(e) => {
            setAlan(e.currentTarget.value);
          }}
        />{" "}
        Resim
      </label>
      <label htmlFor="c3">
        <input
          type="checkbox"
          name="alan"
          value="Spor"
          id="c3"
          onChange={(e) => {
            setAlan(e.currentTarget.value);
          }}
        />
        Spor
      </label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        name="dosya"
        onChange={(e) => {
          setDosya(e.currentTarget.value);
        }}
      />
      <button type="submit" className="col-md-2" onClick={(e) => Info(e)}>
        Gönder
      </button>
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email Address</th>
            <th>Tc Kimlik</th>
            <th>Doğum Tarihi</th>
            <th>İl</th>
            <th>İlçe</th>
            <th>Adres</th>
            <th>Cinsiyet</th>
            <th>İlgi alanları</th>
            <th>Dosya</th>
          </tr>
        </thead>
        <tbody>
          {formInfo.map((ea: any, i) => {
            return (
              <tr key={i}>
                {ea.map((a: string, m: number) => {
                  return <td key={m}>{a}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};
export default Form;
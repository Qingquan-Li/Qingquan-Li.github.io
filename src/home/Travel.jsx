import React from 'react';
import './Travel.css'
import {
  ThailandChiangMai, ThailandChiangRai, ThailandPattaya, ThailandBangkok,
  ChinaGuangdong, ChinaYunnan, ChinaHongKong, ChinaMacao,
  MalaysiaKualaLumpur, MalaysiaMelaka, MalaysiaKotaKinabalu,
  AmericaNewYorkNYC, AmericaNewYorkTimesSquare, AmericaNewYorkCentralPark,
  AmericaNewYorkWallStreet, AmericaNewYorkStatueOfLiberty, AmericaNewYorkTheMET,
  AmericaNewYorkBrooklynBotanicGarden, AmericaNewYorkTaconicStatePark,
  AmericaCaliforniaStateRoute1, AmericaCaliforniaLosAngeles,
  AmericaCaliforniaSanFrancisco, AmericaCaliforniaSiliconValley,
  AmericaCaliforniaPinnaclesNationalPark,
  AmericaNewJerseyStairwayToHeaven,
  AmericaMassachusettsBashBishFallsStatePark,
  AmericaWashingtonDCCapital, AmericaWashingtonDCSmithsonianNationalZoo,
  AmericaConnecticut,
} from './TravelPhotosData';

// const PhotosCard = ({ descrption, photos }) => {
const PhotosCard = (props) => {
  const { descrption, photos } = props;
  // const descrption = props.descrption; // ES5
  // const photos = props.photos; // ES5
  const photosList = photos.map(photo => {
    return (
      // <div
      //   className="background-image ms-1"
      //   style={{ backgroundImage: `url(${photo})` }}
      //   key={photo}
      // />
      <img loading="lazy" className="background-image" src={photo} alt={photo} key={photo} />
    );
  });
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="pb-3">
          {descrption}
        </div>
        <div className="row g-1">
          {photosList}
        </div>
      </div>
    </div>
  )
}

// export default function Travel() {
const Travel = () => {
  return (
    <div className="travel-container">
      <h3 className="text-center">
        <a name="travel" href="#travel">
          <span>Travel</span>
        </a>
      </h3>

      <div className="travel-list-container py-4">

        <PhotosCard
          descrption="I ❤️ NY"
          photos={AmericaNewYorkNYC}
        />
        <PhotosCard
          descrption="TimesSquare, NY"
          photos={AmericaNewYorkTimesSquare}
        />
        <PhotosCard
          descrption="⛲️ Central Park, NY"
          photos={AmericaNewYorkCentralPark}
        />
        <PhotosCard
          descrption="🐂 Wall Street, NY"
          photos={AmericaNewYorkWallStreet}
        />
        <PhotosCard
          descrption="🗽 Statue of Liberty, NY"
          photos={AmericaNewYorkStatueOfLiberty}
        />
        <PhotosCard
          descrption="The Metropolitan Museum of Art, NY"
          photos={AmericaNewYorkTheMET}
        />
        <PhotosCard
          descrption="🌸 Brooklyn Botanic Garden, NY"
          photos={AmericaNewYorkBrooklynBotanicGarden}
        />
        <PhotosCard
          descrption="⛺️ Taconic State Park, NY"
          photos={AmericaNewYorkTaconicStatePark}
        />
        <PhotosCard
          descrption="🚘 State Route 1, California"
          photos={AmericaCaliforniaStateRoute1}
        />
        <PhotosCard
          descrption="Los Angeles, California"
          photos={AmericaCaliforniaLosAngeles}
        />
        <PhotosCard
          descrption="San Francisco, California"
          photos={AmericaCaliforniaSanFrancisco}
        />
        <PhotosCard
          descrption="Stanford University and GooglePlex, Silicon Valley, California"
          photos={AmericaCaliforniaSiliconValley}
        />
        <PhotosCard
          descrption="⛰️ Pinnacles National Park , California"
          photos={AmericaCaliforniaPinnaclesNationalPark}
        />

        <PhotosCard
          descrption="⛰️ Bash Bish Falls State Park, Massachusetts"
          photos={AmericaMassachusettsBashBishFallsStatePark}
        />

        <PhotosCard
          descrption="⛰️ Stairway to Heaven, New Jersey"
          photos={AmericaNewJerseyStairwayToHeaven}
        />

        <PhotosCard
          descrption="Washington, D.C. 🇺🇸"
          photos={AmericaWashingtonDCCapital}
        />
        <PhotosCard
          descrption="🐼 Smithsonian National Zoo, Washington, D.C."
          photos={AmericaWashingtonDCSmithsonianNationalZoo}
        />

        <PhotosCard
          descrption="⛵️ Connecticut 🇺🇸"
          photos={AmericaConnecticut}
        />

        <PhotosCard
          descrption="🛬️ Kuala Lumpur, Malaysia 🇲🇾"
          photos={MalaysiaKualaLumpur}
        />
        <PhotosCard
          descrption="Melaka, Malaysia 🇲🇾"
          photos={MalaysiaMelaka}
        />
        <PhotosCard
          descrption="🛫️ Kota Kinabalu, Malaysia 🇲🇾"
          photos={MalaysiaKotaKinabalu}
        />
        <PhotosCard
          descrption="🛬️ ChiangMai, Thailand 🇹🇭"
          photos={ThailandChiangMai}
        />
        <PhotosCard
          descrption="ChiangRai, Thailand 🇹🇭"
          photos={ThailandChiangRai}
        />
        <PhotosCard
          descrption="Pattaya, Thailand 🇹🇭"
          photos={ThailandPattaya}
        />
        <PhotosCard
          descrption="🛫️ Bangkok, Thailand 🇹🇭"
          photos={ThailandBangkok}
        />
        <PhotosCard
          descrption="🚗 Guangdong, China 🇨🇳"
          photos={ChinaGuangdong}
        />
        <PhotosCard
          descrption="✈️ Yunnan, China 🇨🇳"
          photos={ChinaYunnan}
        />
        <PhotosCard
          descrption="HongKong 🇭🇰"
          photos={ChinaHongKong}
        />
        <PhotosCard
          descrption="Macao 🇲🇴"
          photos={ChinaMacao}
        />

        <p className="text-center fw-lighter">
          <small>
            <small>        
              We travel not to escape life, but for life not to escape us.
            </small>
          </small>
        </p>
      </div>
    </div>

  );
}

export default Travel;

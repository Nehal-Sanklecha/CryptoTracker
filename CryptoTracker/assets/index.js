
import ADA from './images/ADA.png';
import BCH from './images/BCH.png';
import BNB from './images/BNB.png';
import BTC from './images/BTC.png';
import DOGE from './images/DOGE.png';
import DOT from './images/DOT.png';
import ETH from './images/ETH.png';
import FIL from './images/FIL.png';
import LINK from './images/LINK.png';
import LTC from './images/LTC.png';
import NEO from './images/NEO.png';
import SOL from './images/SOL.png';
import THETA from './images/THETA.png';
import TRX from './images/TRX.png';
import UNI from './images/UNI.png';
import USDC from './images/USDC.png';
import USDT from './images/USDT.png';
import VET from './images/VET.png';
import XLM from './images/XLM.png';
import XRP from './images/XRP.png';

const getLogoImage = (logo) => {
  switch (logo) {
    case 'ADA':
      return ADA;
    case 'BCH':
      return BCH;
    case 'BNB':
      return BNB;
    case 'BTC':
      return BTC;
    case 'DOGE':
      return DOGE;
    case 'DOT':
      return DOT;
    case 'ETH':
      return ETH;
    case 'FIL':
      return FIL;
    case 'LINK':
      return LINK;
    case 'LTC':
      return LTC;
    case 'NEO':
      return NEO;
    case 'SOL':
      return SOL;
    case 'THETA':
      return THETA;
    case 'TRX':
      return TRX;
    case 'UNI':
      return UNI;
    case 'USDC':
      return USDC;
    case 'USDT':
      return USDT;
    case 'VET':
      return VET;
    case 'XLM':
      return XLM;
    case 'XRP':
      return XRP;
  }
}

export default getLogoImage;
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url('https://fonts.googleapis.com/css2?family=Manrope:wght@400',
  '500;600;700;800&display=swap'); *': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'body': {
    'fontFamily': '"Manrope", sans-serif'
  },
  'swiper-pagination-bullet': {
    'width': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#181a1e' }],
    'opacity': '100% !important',
    'background': '#fff !important'
  },
  'swiper-pagination-bullet-active': {
    'background': '#0067ff !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'swiper': {
    'paddingBottom': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': '!important' }]
  },
  'swiper-slideswiper-slide-next': {
    'background': '#0067ff',
    'borderRadius': '12px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': NaN }, { 'unit': 'string', 'value': 'rgba(0, 102, 255, 0.3)' }, { 'unit': 'string', 'value': 'rgba(0, 102, 255, 0.3)' }, { 'unit': 'string', 'value': '!important' }]
  },
  'swiper-slideswiper-slide-next h4': {
    'color': '#fff !important'
  },
  'swiper-slideswiper-slide-next p': {
    'color': '#fff !important'
  },
  'swiperswiper-pagination': {
    'top': [{ 'unit': '%V', 'value': 0.9 }, { 'unit': 'string', 'value': '!important' }]
  },
  'sticky__header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '99999',
    'boxShadow': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': -8 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#ddd' }]
  }
});

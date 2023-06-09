import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private httpService: HttpClient) {}
  country() {
    return [
      {
        id: 1,
        country: 'in',
        name: 'India',
      },
      {
        id: 2,
        country: 'pk',
        name: 'Pakistan',
      },
      {
        id: 3,
        country: 'en',
        name: 'England',
      },
      {
        id: 4,
        country: 'af',
        name: 'Afghanistan',
      },
    ];
  }
  state() {
    return [
      {
        id: 1,
        country: 'in',
        state: 'tn',
        name: 'Tamilnadu',
      },
      {
        id: 2,
        country: 'in',
        state: 'kl',
        name: 'Kerla',
      },
      {
        id: 3,
        country: 'in',
        state: 'ka',
        name: 'karnataka',
      },
      {
        id: 4,
        country: 'in',
        state: 'tl',
        name: 'Telangana',
      },
    ];
  }

  city() {
    return [
      {
        id: 1,
        state: 'tn',
        name: 'Chennai',
        city: 'TN-Chennai',
      },
      {
        id: 2,
        state: 'tn',
        name: 'Coimbatore',
        city: 'TN-Coimbatore',
      },
      {
        id: 3,
        state: 'tn',
        name: 'Madurai',
        city: 'TN-Madurai',
      },
      {
        id: 4,
        state: 'tn',
        name: 'Tiruchirappalli',
        city: 'TN-Tiruchirappalli',
      },
      {
        id: 5,
        state: 'tn',
        name: 'Tuticorin',
        city: 'TN-Tuticorin',
      },
      {
        id: 6,
        state: 'tn',
        name: 'tiruvarur',
        city: 'TN-Tiruvarur',
      },

      {
        id: 7,
        state: 'tn',
        name: 'Salem',
        city: 'TN-Salem',
      },
      {
        id: 8,
        state: 'tn',
        name: 'Tirunelveli',
        city: 'TN-Tirunelveli',
      },
      {
        id: 9,
        state: 'tn',
        name: 'Tiruppur',
        city: 'TN-Tiruppur',
      },
      {
        id: 10,
        state: 'tn',
        name: 'Tirupathur',
        city: 'TN-Tirupathur',
      },
      {
        id: 12,
        state: 'tn',
        name: ' Vellore',
        city: 'TN-Vellore',
      },
      {
        id: 13,
        state: 'tn',
        name: 'Tiruvannamalai',
        city: 'TN-Tiruvannamalai',
      },
      {
        id: 14,
        state: 'tn',
        name: 'Erode',
        city: 'TN-Erode',
      },
      {
        id: 15,
        state: 'tn',
        name: 'Thoothukkudi',
        city: 'TN-Thoothukkudi',
      },
      {
        id: 16,
        state: 'tn',
        name: 'Dindigul',
        city: 'TN-Dindigul',
      },
      {
        id: 17,
        state: 'tn',
        name: 'Thanjavur',
        city: 'TN-Thanjavur',
      },
      {
        id: 18,
        state: 'tn',
        name: 'Ranipet',
        city: 'TN-Ranipet',
      },
      {
        id: 19,
        state: 'tn',
        name: 'Virudhunagar',
        city: 'TN-Virudhunagar',
      },
      {
        id: 20,
        state: 'tn',
        name: 'Karur',
        city: 'TN-Karur',
      },
      {
        id: 21,
        state: 'tn',
        name: 'Nilgiris',
        city: 'TN-Nilgiris',
      },
      {
        id: 22,
        state: 'tn',
        name: 'Krishnagiri',
        city: 'TN-Krishnagiri',
      },
      {
        id: 23,
        state: 'tn',
        name: 'Kanyakumari',
        city: 'TN-Kanyakumari',
      },
      {
        id: 24,
        state: 'tn',
        name: 'Kanchipuram',
        city: 'TN-Kanchipuram',
      },
      {
        id: 25,
        state: 'tn',
        name: 'Namakkal',
        city: ' TN-Namakkal',
      },
      {
        id: 26,
        state: 'tn',
        name: 'Sivagangai',
        city: 'TN-Sivagangai',
      },

      {
        id: 27,
        state: 'tn',
        name: 'Cuddalore',
        city: 'TN-Cuddalore',
      },

      {
        id: 28,
        state: 'tn',
        name: 'chengalpet',
        city: 'TN-chengalpet',
      },
      {
        id: 29,
        state: 'tn',
        name: 'Dharmapuri',
        city: 'TN-Dharmapuri',
      },
      {
        id: 30,
        state: 'tn',
        name: 'Kallakurichi',
        city: 'TN-Kallakurichi',
      },
      {
        id: 31,
        state: 'tn',
        name: 'Kancheepuram',
        city: 'TN-Kancheepuram',
      },
      {
        id: 32,
        state: 'tn',
        name: 'Mayiladuthurai',
        city: 'TN-Mayiladuthurai',
      },
      {
        id: 33,
        state: 'tn',
        name: 'Nagapattinam',
        city: 'TN-Nagapattinam',
      },
      {
        id: 34,
        state: 'tn',
        name: 'Perambalur',
        city: 'TN-Perambalur',
      },
      {
        id: 35,
        state: 'tn',
        name: 'Pudukottai',
        city: 'TN-Pudukottai',
      },
      {
        id: 36,
        state: 'tn',
        name: 'Ramanathapuram',
        city: 'TN-Ramanathapuram',
      },
      {
        id: 37,
        state: 'tn',
        name: 'vilupuram',
        city: 'TN-vilupuram',
      },

      {
        id: 1,
        state: 'kl',
        name: ' Wayanad',
        city: 'KL-Wayanad',
      },
      {
        id: 2,
        state: 'kl',
        name: 'Thrissur',
        city: 'KL-Thrissur',
      },
      {
        id: 3,
        state: 'kl',
        name: 'Thiruvananthapuram',
        city: 'KL-Thiruvananthapuram',
      },
      {
        id: 3,
        state: 'kl',
        name: 'Pathanamthitta',
        city: 'KL-Pathanamthitta',
      },
      {
        id: 4,
        state: 'kl',
        name: 'Palakkad',
        city: 'KL-Palakkad',
      },
      {
        id: 5,
        state: 'kl',
        name: 'Malappuram',
        city: 'KL-Malappuram',
      },
      {
        id: 6,
        state: 'kl',
        name: 'Kozhikode',
        city: 'KL-Kozhikode',
      },
      {
        id: 7,
        state: 'kl',
        name: 'Kottayam',
        city: 'KL-Kottayam',
      },
      {
        id: 8,
        state: 'kl',
        name: 'Kollam',
        city: 'KL-Kollam',
      },
      {
        id: 9,
        state: 'kl',
        name: 'Kasaragod',
        city: 'KL-Kasaragod',
      },
      {
        id: 10,
        state: 'kl',
        name: 'Kannur',
        city: 'KL-Kannur',
      },
      {
        id: 11,
        state: 'kl',
        name: 'Idukki',
        city: 'KL-Idukki',
      },
      {
        id: 12,
        state: 'kl',
        name: 'Ernakulam',
        city: 'KL-Ernakulam',
      },

      {
        id: 1,
        state: 'ka',
        name: 'Chamarajanagar',
        city: 'KA-Chamarajanagar',
      },
      {
        id: 2,
        state: 'ka',
        name: 'Vijayapur',
        city: 'KA-Vijayapur',
      },
      {
        id: 3,
        state: 'ka',
        name: 'Bidar',
        city: 'KA-Bidar',
      },
      {
        id: 4,
        state: 'ka',
        name: 'Ballari',
        city: 'KA-Ballari',
      },
      {
        id: 5,
        state: 'ka',
        name: 'Belagavi',
        city: 'KA-Belagavi',
      },
      {
        id: 6,
        state: 'ka',
        name: 'Bengaluru Rural',
        city: 'KA-Bengaluru Rural',
      },
      {
        id: 7,
        state: 'ka',
        name: 'Bengaluru Urban',
        city: 'KA-Bengaluru Urban',
      },
      {
        id: 8,
        state: 'ka',
        name: 'Bangalkot',
        city: 'KA-Bengalkot',
      },
      {
        id: 9,
        state: 'ka',
        name: 'Shivamogga',
        city: 'KA-Shivamogga',
      },
      {
        id: 10,
        state: 'ka',
        name: 'Ramanagara',
        city: 'KA-Ramanagara',
      },
      {
        id: 11,
        state: 'ka',
        name: 'Raichur',
        city: 'KA-Raichur',
      },
      {
        id: 12,
        state: 'ka',
        name: 'Mysuru',
        city: 'KA-Mysuru',
      },
      {
        id: 13,
        state: 'ka',
        name: 'Mandya',
        city: 'KA-Mandya',
      },
      {
        id: 14,
        state: 'ka',
        name: 'Koppal',
        city: 'KA-Koppal',
      },
      {
        id: 15,
        state: 'ka',
        name: 'Kolar',
        city: 'KA-Kolar',
      },
      {
        id: 16,
        state: 'ka',
        name: 'Kodagu',
        city: 'KA-Kodagu',
      },
      {
        id: 17,
        state: 'ka',
        name: 'Haveri',
        city: 'KA-Haveri',
      },
      {
        id: 18,
        state: 'ka',
        name: 'Hassan',
        city: 'KA-Hassan',
      },
      {
        id: 19,
        state: 'ka',
        name: 'Kalaburagi',
        city: 'KA-Kalaburagi',
      },
      {
        id: 20,
        state: 'ka',
        name: 'Gadag',
        city: 'KA-Gadag',
      },
      {
        id: 21,
        state: 'ka',
        name: 'Yadgir',
        city: 'KA-Yadgir',
      },
      {
        id: 22,
        state: 'ka',
        name: 'Uttara',
        city: 'KA-Uttara',
      },
      {
        id: 23,
        state: 'ka',
        name: 'Udupi',
        city: 'KA-Udupi',
      },
      {
        id: 24,
        state: 'ka',
        name: 'Tumakuru',
        city: 'KA-Tumakuru',
      },
      {
        id: 25,
        state: 'ka',
        name: 'Dharwad',
        city: 'KA-Dharwad',
      },

      {
        id: 26,
        state: 'ka',
        name: ' Davanagere',
        city: 'KA-Davanagere',
      },
      {
        id: 27,
        state: 'ka',
        name: 'Dakshina',
        city: 'KA-Dakshina',
      },
      {
        id: 28,
        state: 'ka',
        name: 'Chitradurga',
        city: 'KA-Chitradurga',
      },
      {
        id: 29,
        state: 'ka',
        name: 'Chikkamagaluru',
        city: 'KA-Chikkamagaluru',
      },
      {
        id: 30,
        state: 'ka',
        name: 'Chikballapur',
        city: 'KA-Chikballapur',
      },

      {
        id: 1,
        state: 'tl',
        name: 'Adilabad',
        city: 'TL-Adilabad',
      },
      {
        id: 2,
        state: 'tl',
        name: 'Hyderabad',
        city: 'TL-Hyderabad',
      },
      {
        id: 3,
        state: 'tl',
        name: 'Karimnagar',
        city: 'TL-Karimnagar',
      },
      {
        id: 4,
        state: 'tl',
        name: 'Khammam',
        city: 'TL-Khammam',
      },
      {
        id: 5,
        state: 'tl',
        name: 'Mahabubnagar',
        city: 'TL-Mahabubnagar',
      },
      {
        id: 6,
        state: 'tl',
        name: 'medak',
        city: 'TL-Medak',
      },

      {
        id: 7,
        state: 'tl',
        name: 'Nalgonda',
        city: 'TL-Nalgonda',
      },
      {
        id: 8,
        state: 'tl',
        name: 'Nizamabad',
        city: 'TL-Nizamabad',
      },
      {
        id: 9,
        state: 'tl',
        name: 'Warangal',
        city: 'TL-Warangal',
      },
    ];
  }
  complaints() {
    return [
      {
        comId: 1,
        service: 'Engine Repair',
      },
      {
        comId: 2,
        service: 'Car Wash',
      },
      {
        comId: 3,
        service: 'Brake Repair',
      },
      {
        comId: 4,
        service: 'Tyres and Wheels',
      },
      {
        comId: 5,
        service: 'Accident Repair',
      },
      {
        comId: 6,
        service: 'Lights and Fitments',
      },
      {
        comId: 7,
        service: 'Steering Repair',
      },
      {
        comId: 8,
        service: 'Battery Repair',
      },
      {
        comId: 9,
        service: 'Denting and Painting',
      },
      {
        comId: 10,
        service: 'AC Service & Repair',
      },
      {
        comId: 11,
        service: 'Windshield and Glass',
      },
      {
        comId: 12,
        service: 'Oil Change',
      },
      {
        comId: 13,
        service: 'Running Repair',
      },
      {
        comId: 14,
        service: 'Periodic Maintenance Service',
      },
      {
        comId: 15,
        service: 'Other Complaints',
      },
    ];
  }
  vehicle() {
    return [
      {
        id: 1,
        vehicle: 'cr',
        type: 'checkbox',
        name: 'Car',
      },
      {
        id: 2,
        vehicle: 'vn',
        type: 'checkbox',
        name: 'Van',
      },
      {
        id: 3,
        vehicle: 'bk',
        type: 'checkbox',
        name: 'Bike',
      },
      {
        id: 4,
        vehicle: 'bs',
        type: 'checkbox',
        name: 'Bus',
      },
      {
        id: 5,
        vehicle: 'lry',
        type: 'checkbox',
        name: 'Truck',
      },
    ];
  }
  brands() {
    return [
      {
        id: 1,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'ww',
        name: 'Wolkswagon',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'bmw',
        vehicle: 'cr',
        name: 'BMW',
      },
      {
        id: 3,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'mb',
        name: 'Mercedes-Benz',
      },
      {
        id: 4,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'mh',
        name: 'Mahindra',
      },
      {
        id: 5,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'ta',
        name: 'Tata',
      },
      {
        id: 6,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'adi',
        name: 'Audi',
      },
      {
        id: 7,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'hy',
        name: 'Hyundai',
      },
      {
        id: 8,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'ms',
        name: 'Maruti Suzuki',
      },
      {
        id: 9,
        type: 'checkbox',
        vehicle: 'cr',
        brand: 'ty',
        name: 'Toyota',
      },
      {
        id: 10,
        type: 'checkbox',
        vehicle: 'bk',
        brand: 'ya',
        name: 'Yamaha',
      },

      {
        id: 11,
        type: 'checkbox',
        vehicle: 'bk',
        brand: 'bj',
        name: 'Bajaj',
      },

      {
        id: 12,
        type: 'checkbox',
        vehicle: 'bk',
        brand: 'hon',
        name: 'Honda',
      },
      {
        id: 13,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'su',
        name: 'Maruti Suzuki',
      },

      {
        id: 14,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'for',
        name: 'Force',
      },
      {
        id: 15,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'mahi',
        name: 'Mahindra',
      },
      {
        id: 16,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'hun',
        name: 'Hyundai',
      },
      {
        id: 17,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'tt',
        name: 'Tata',
      },
      {
        id: 18,
        type: 'checkbox',
        vehicle: 'vn',
        brand: 'hn',
        name: 'Honda',
      },
      {
        id: 19,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'tat',
        name: 'Tata',
      },
      {
        id: 20,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'mahin',
        name: 'Mahindra',
      },
      {
        id: 21,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'ech',
        name: 'Eicher',
      },
      {
        id: 22,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'asho',
        name: 'Ashok Leyland',
      },
      {
        id: 23,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'fe',
        name: 'force',
      },
      {
        id: 24,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'isu',
        name: 'Isuzu',
      },
      {
        id: 24,
        type: 'checkbox',
        vehicle: 'lry',
        brand: 'bharat',
        name: 'Bharat Benz',
      },
      {
        id: 25,
        type: 'checkbox',
        vehicle: 'bs',
        brand: 'benz',
        name: 'Bharat Benz',
      },
      {
        id: 26,
        type: 'checkbox',
        vehicle: 'bs',
        brand: 'ley',
        name: 'Ashok Leyland',
      },
      {
        id: 27,
        type: 'checkbox',
        vehicle: 'bs',
        brand: 'tata',
        name: 'Tata',
      },
      {
        id: 28,
        type: 'checkbox',
        vehicle: 'bs',
        brand: 'forc',
        name: 'Force',
      },
      {
        id: 29,
        type: 'checkbox',
        vehicle: 'bs',
        brand: 'eicher',
        name: 'Eicher',
      },
    ];
  }

  model() {
    return [
      {
        id: 1,
        type: 'checkbox',
        brand: 'ww',
        variant: 'polo',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Ameo',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Vento',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Passat',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Tiguan',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Virtus',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Taigun',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'ww',
        variant: 'Jetta',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'X1',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'X7',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'X5',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'Z4',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'bmw',
        variant: '3 Series',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'X3',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'bmw',
        variant: '7 Series',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'i7',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'iX',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'bmw',
        variant: '2 series',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'bmw',
        variant: '5 Series',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'bmw',
        variant: '6 Series',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'i4',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'XM',
      },
      {
        VehId: 15,
        type: 'checkbox',
        brand: 'bmw',
        variant: 'M4 Competition',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'mb',
        variant: '3 Series Gran Limousine',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'mb',
        variant: 'M8 Coupe Competition',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLA',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'mb',
        variant: 'S-Class',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'mb',
        variant: 'C-Class',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLE',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'mb',
        variant: 'E-Class',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLS',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG G 63',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG GLC 43',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'mb',
        variant: 'EQS',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'mb',
        variant: 'MayBach S-Clss',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLC',
      },
      {
        VehId: 14,
        type: 'checkbox',
        brand: 'mb',
        variant: 'G-Class',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLB',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG GLE 63S',
      },
      {
        id: 17,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG E53',
      },
      {
        id: 18,
        type: 'checkbox',
        brand: 'mb',
        variant: 'A-Class Limousine',
      },
      {
        id: 19,
        type: 'checkbox',
        brand: 'mb',
        variant: 'EQB',
      },
      {
        id: 20,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG GLE 53',
      },
      {
        id: 21,
        type: 'checkbox',
        brand: 'mb',
        variant: 'EQC',
      },
      {
        id: 22,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG 35',
      },
      {
        id: 23,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG A45S',
      },
      {
        id: 24,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG E53 Cabriolet',
      },
      {
        id: 25,
        type: 'checkbox',
        brand: 'mb',
        variant: 'AMG E63',
      },
      {
        id: 26,
        brand: 'mb',
        type: 'checkbox',
        variant: 'AMG GLA 35',
      },
      {
        id: 27,
        type: 'checkbox',
        brand: 'mb',
        variant: 'GLC Coupe',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Thar',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'mh',
        variant: 'XUV 300',
      },
      {
        id: 3,
        type: 'checkbox',

        brand: 'mh',
        variant: 'XUV 500',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'mh',
        variant: 'XUV 700',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Bolero',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Scorpio-N',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Scorpio Classic',
      },
      {
        id: 8,
        type: 'checkbox',

        brand: 'mh',
        variant: 'Bolero Neo',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Marazzo',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Bolero Camper',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'mh',
        variant: 'XUV 400 EV',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'mh',
        variant: 'KUV 100 NXT',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'mh',
        variant: 'E Verito',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Bolero Maxitruck Plus',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Bolero Pikup Extralong',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'mh',
        variant: 'Bolero Pikup Extrastrong',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Indica',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Indigo',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Manza',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Nexon',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Punch',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Harrier',
      },
      {
        id: 7,
        type: 'checkbox',

        brand: 'ta',
        variant: 'Tiago',
      },
      {
        id: 8,
        type: 'checkbox',

        brand: 'ta',
        variant: 'Altroz',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Safari',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Tiago EV',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Tigor',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Tigor EV',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Nexon EV Max',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Tiago Vxi',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Yodha Pikup',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'ta',
        variant: 'Nexon EV Prime',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'adi',
        variant: 'Q3',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'adi',
        variant: 'Q5',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'adi',
        variant: 'Q7',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'adi',
        variant: 'Q8',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'adi',
        variant: 'A4',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'adi',
        variant: 'A6',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'adi',
        variant: 'RS5',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'adi',
        variant: 'e-tron',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'adi',
        variant: 'RS e-tron GT',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'adi',
        variant: 'A8L',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'adi',
        variant: 'Q3 Sportback',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'adi',
        variant: 'S5 Sportback',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'adi',
        variant: 'RS Q8',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Creta',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Venue',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'hy',
        variant: 'i20',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Aura',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Tucson',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Alcazar',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Elantra Xi',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Kona Electric',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Venue N Line',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'hy',
        variant: 'Grand i10 Nios',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'hy',
        variant: 'i10',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'hy',
        variant: 'i20 N Line',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'hy',
        variant: 'IONIQ 5',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Brezza',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Ertiga',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Swift',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Baleno',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Dzire',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Alto 800',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Wagon R',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Alto K10',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Eeco',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'ms',
        variant: 'XL6',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Celerio',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Ignis',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'ms',
        variant: 'S-Presso',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Ciaz',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Ertiga Tour',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Alto 800 Tour',
      },
      {
        id: 17,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Eeco Cargo',
      },
      {
        id: 18,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Grand Vitara',
      },
      {
        id: 19,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Super Carry',
      },
      {
        id: 20,
        type: 'checkbox',
        brand: 'ms',
        variant: 'swift Dzire Tour',
      },
      {
        id: 21,
        type: 'checkbox',
        brand: 'ms',
        variant: 'Wagon R Tour',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Fortuner',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Land Crusier 300',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Urban Crusier Hyryder',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Hilux',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Vellfire',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Camry',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Fortuner Legender',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Glanza',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Innova Crysta',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Innova Hycross',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'ty',
        variant: 'Corolla Altis',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'ya',
        variant: 'R15',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'ya',
        variant: 'FZS FI V4',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'ya',
        variant: 'Fascino 125',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'ya',
        variant: 'RayZR 125',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'ya',
        variant: 'FZ S FI',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'ya',
        variant: 'FZ FI',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'ya',
        variant: 'R15S',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'ya',
        variant: 'FZ25',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'ya',
        variant: 'FZ X',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'ya',
        variant: 'Aerox 155',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'ya',
        variant: 'R15 V4',
      },

      {
        id: 1,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar 125',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar 150',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar N160',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'bj',
        variant: 'RS 200',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'bj',
        variant: 'NS125',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'bj',
        variant: 'NS200',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Paltina 100',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'bj',
        variant: 'NS160',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Dominar 400',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Dominar 250',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar N250',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Platina 110',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar P150',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'bj',
        variant: 'CT 110',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Avengers Street160',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Chetak',
      },
      {
        id: 17,
        type: 'checkbox',
        brand: 'bj',
        variant: 'CT 125X',
      },
      {
        id: 18,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Pulsar F250',
      },
      {
        id: 19,
        type: 'checkbox',
        brand: 'bj',
        variant: 'Avenger Cruise 220',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Activa',
      },
      {
        id: 2,
        type: 'checkbox',
        brand: 'hon',
        variant: 'AP 125',
      },
      {
        id: 3,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Shine',
      },
      {
        id: 4,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Dio',
      },
      {
        id: 5,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Unicorn',
      },
      {
        id: 6,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Hness CB350',
      },
      {
        id: 7,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Hornet',
      },
      {
        id: 8,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Activa 125',
      },
      {
        id: 9,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Livo',
      },
      {
        id: 10,
        type: 'checkbox',
        brand: 'hon',
        variant: 'X-Blade',
      },
      {
        id: 11,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CB350RS',
      },
      {
        id: 12,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CB300F',
      },
      {
        id: 13,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CB300R',
      },
      {
        id: 14,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CD 110Dream',
      },
      {
        id: 15,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CBR 650R',
      },
      {
        id: 16,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CB200X',
      },
      {
        id: 17,
        type: 'checkbox',
        brand: 'hon',
        variant: 'Grazia',
      },
      {
        id: 18,
        type: 'checkbox',
        brand: 'hon',
        variant: 'CBR1000RR-R Fireblade',
      },
      {
        id: 1,
        type: 'checkbox',
        brand: 'su',
        variant: 'Omni',
      },
    ];
  }
  service() {
    return [
      {
        Id: 1,
        Center: 'All in One Service Center',
      },
      {
        Id: 2,
        Center: 'Wolkswagon Service Center',
      },
      {
        Id: 3,
        Center: 'BMW Service Center',
      },
      {
        Id: 4,
        Center: 'Mercedez-Benz Service Center',
      },
      {
        Id: 5,
        Center: 'Mahindra Service Center',
      },
      {
        Id: 6,
        Center: 'Tata Service Center',
      },
      {
        Id: 7,
        Center: 'Yamaha Service Center',
      },
      {
        Id: 8,
        Center: 'Audi Service Center',
      },
      {
        Id: 9,
        Center: 'Bajaj Service Center',
      },
      {
        Id: 10,
        Center: 'Hyundai Service Center',
      },
      {
        Id: 11,
        Center: 'Honda Service Center',
      },
      {
        Id: 12,
        Center: 'Maruti Suzuki in One Service Center',
      },
      {
        Id: 13,
        Center: 'Toyoto Service Center',
      },
    ];
  }

  details = [
    {
      id: 1,
      image:"./assets/store-details/store-img-1.png",
     name: 'SKY Automobiles Service Center',
     special: 'Powerfull Equipments',
      city: 'TN-Chennai',
      location: 'Aavadi, chennai',
    },
    {
      id: 2,
      image:"./assets/store-details/store-img-2.png",
     name: 'Krishna Automobiles Service Center',
     special: 'Powerfull Equipments',
      city: 'TN-Coimbatore',
      location: 'Raja st, Coimbatore',
    },
    {
      id: 3,
      image:"./assets/store-details/store-img-3.png",
     name: 'Tokyo Car Service Center',
     special: 'Powerfull Equipments',
      city: 'TN-Madurai',
      location: 'Karuppur, Kumbakonam',
    },
    {
      id: 4,
      image:"./assets/store-details/store-img-4.png",
     name: 'Raja Bike Service Center',
     special: 'Powerfull Equipments',
      city: 'TN-Tuticorin',
      location: 'New St, Tuticorin',
    },
    {
      id:5,
      image:"./assets/store-details/store-img-5.png",
     name: 'Valley Multi Brand Service Center',
     special: 'Powerfull Equipments',
      city:'TN-Tiruchirappalli',
      location: 'T.V.S Tolgate, Tiruchirappalli',
    },
  ];

  help = [
    {
      name: 'Immediate Help',
    },
    {
      name: 'Repair Spot Help',
    },
    {
      name: 'Others',
    },
  ];
}




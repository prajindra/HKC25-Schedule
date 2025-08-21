
interface ScheduleItem {
  time: string;
  agenda: string;
  venue: string;
  type: 'kirtan' | 'meal' | 'ceremony' | 'break' | 'session' | 'workshop';
}

export const scheduleData: { [key: number]: ScheduleItem[] } = {
  1: [
    { time: '5.00 pm', agenda: 'Adivas Ceremony', venue: 'Temple', type: 'ceremony' },
    { time: '5.30 pm', agenda: 'VIP guests seated/ garland ceremony', venue: 'Temple', type: 'ceremony' },
    { time: '', agenda: 'Speeches:\\nHG Patitapavana Caitanya prabhu\\nHG Lokabandhu Gauranga prabhu, ISKCON Malaysia President\\nHG Simheswara prabhu, Co-Regional Secretary ISKCON Malaysia\\nHH Bhanu Swami, Co-GBC\\nHH Jayapataka Swami, Co-GBC', venue: 'Temple', type: 'session' },
    { time: '6.15 pm', agenda: 'Kirtan by HG Nitai Priya prabhu', venue: 'Temple', type: 'kirtan' },
    { time: '7.00 - 8.00 pm', agenda: 'Dinner', venue: '-', type: 'meal' }
  ],
  2: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa session', venue: 'Temple Hall', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (HH Bhanu Swami Maharaj with Tamil translation)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: 'Conference Hall', type: 'session' },
    { time: '9.00 - 10.00 am', agenda: 'Breakfast', venue: '-', type: 'meal' },
    { time: '10.15 am', agenda: 'English Session 1 (HH Bhakti Purusottama Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '10.15 am', agenda: 'Tamil Session 1 (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '10.15 am', agenda: 'Youth Session 1 (HH Bhakti Prachar Parivrajak Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '10.15 am', agenda: 'English Session 2 (HH BVV Narasimha Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'English Session 3 (HG Devakinandan prabhu)', venue: 'Temple Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'Tamil Session 2 (HG Maha Varaha prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'Youth Session 2 (HH Bhakti Vinoda Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'English Session 4 (HH Bhanu Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'Bengali Session (HH Bhakti Purusottama Swami)', venue: 'TBA', type: 'session' },
    { time: '1.30 - 2.30 pm', agenda: 'Lunch', venue: '-', type: 'meal' },
    { time: '3.00 - 4.30 pm', agenda: 'Rest', venue: '-', type: 'break' },
    { time: '4.45 pm', agenda: 'Workshop 1 English Session (HG Devakinandan prabhu)', venue: 'Temple Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Workshop 2 Tamil Session (HG Jagadhananda prabhu)', venue: 'Multi-purpose Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Youth Yoga Session (HG Nitai Priya prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'workshop' },
    { time: '6.00 - 7.00 pm', agenda: 'Dinner', venue: '-', type: 'meal' },
    { time: '7.00 pm', agenda: 'Launching Ceremony with VIPs + Cake Cutting Ceremony (MPH)', venue: 'Multi-purpose Hall', type: 'ceremony' },
    { time: '7.30 pm', agenda: 'Plenary Session by HH Jayapataka Swami: A Preaching Renaissance: The Malaysian Mission Forward (with Tamil translation) ', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.15 pm', agenda: 'Special Drama', venue: 'Multi-purpose Hall', type: 'ceremony' },
    { time: '8.35 pm', agenda: 'Plenary Session: Appreciating ISKCON Malaysia History', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '9.35 pm', agenda: 'KIRTAN - by HG Nitai Priya Prabhu', venue: 'Multi-purpose Hall', type: 'kirtan' }
  ],
  3: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa Session', venue: 'Temple Hall', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (HH Bhakti Purusottama Swami) - with Tamil translation', venue: 'Temple Hall', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: 'Conference Hall', type: 'session' },
    { time: '9.00 - 10.00 am', agenda: 'Breakfast', venue: '-', type: 'meal' },
    { time: '10.00 am', agenda: 'Preaching best practices', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '10.30 am', agenda: 'Plenary: Reviving the Preaching Spirit', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '11.15 am', agenda: 'English Session 5 (HH Bhanu Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '11.15 am', agenda: 'Tamil Session 3 (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '11.15 am', agenda: 'Youth Session 3 (HG Devakinandan prabhu)', venue: 'Conference Hall', type: 'session' },
    { time: '11.15 am', agenda: 'English Session 6 (HG Maha Varaha prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '11.15 am', agenda: 'Chinese session (HH BVV Narasimha Swami)', venue: 'TBA', type: 'session' },
    { time: '12.30 pm', agenda: 'English Session 7 (HH BVV Narasimha Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'Tamil Session 4 (HG Jagadhananda prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'Youth Session 4 (HH Bhakti Prachar Parivrajak Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'English Session 10 (HH Bhakti Vinoda Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '1.30 - 2.30 pm', agenda: 'Lunch', venue: '-', type: 'meal' },
    { time: '3.00 - 4.30 pm', agenda: 'Rest', venue: '-', type: 'break' },
    { time: '4.00 pm', agenda: 'Workshop 3 English Session (HH Bhakti Prachar Parivrajak Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '4.00 pm', agenda: 'Workshop 4 Tamil Session (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '4.00 pm', agenda: 'Youth Workshop (HH Bhakti Vinoda Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Temple Presidents Workshop (HG Yaduraj Prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '6.00 - 7.00 pm', agenda: 'Dinner', venue: '-', type: 'meal' },
    { time: '7.00 pm', agenda: 'Preaching best practices', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '7.30 pm', agenda: 'Video Presentation', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '7.40 pm', agenda: 'Plenary Session by HH Jayapataka Swami', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.00 pm', agenda: 'Preaching Expo', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '9.30 pm', agenda: 'Kirtan by Nitai Priya prabhu', venue: 'Multi-purpose Hall', type: 'kirtan' }
  ],
  4: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: '-', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: '-', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa session', venue: '-', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: '-', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: '-', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (English) HH BVV Narasimha Swami (with Tamil translation)', venue: '-', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: '-', type: 'session' },
    { time: '8.45 - 9.30 am', agenda: 'Breakfast', venue: '-', type: 'meal' },
    { time: '9.30 am', agenda: 'Akshaya Patra (Lucky Draw)', venue: '-', type: 'ceremony' },
    { time: '10.15 am', agenda: 'Auction', venue: '-', type: 'ceremony' },
    { time: '11.15 am', agenda: 'Speeches', venue: '-', type: 'session' },
    { time: '11.45 am', agenda: 'Appreciation sharing by delegates from: China, India, Australia, Singapore, Malaysia', venue: '-', type: 'session' },
    { time: '12.15 pm', agenda: 'Group Photo', venue: '-', type: 'ceremony' },
    { time: '12.30 pm', agenda: 'FINALE Kirtan by HG Nitai Priya prabhu', venue: '-', type: 'kirtan' },
    { time: '1.00 pm', agenda: 'Lunch/ End', venue: '-', type: 'meal' }
  ]
};

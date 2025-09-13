
interface ScheduleItem {
  time: string;
  agenda: string;
  venue: string;
  type: 'kirtan' | 'meal' | 'ceremony' | 'break' | 'session' | 'workshop';
}

export const scheduleData: { [key: number]: ScheduleItem[] } = {
  1: [
    { time: '5.30 pm', agenda: 'Kirtan by HG Pavan Nitai prabhu', venue: 'Temple', type: 'kirtan' },
    { time: '6.30 - 7.30 pm', agenda: 'Dinner', venue: 'Prasadam Tent', type: 'meal' },
    { time: '7.30 pm', agenda: 'Adivas Ceremony', venue: 'Temple', type: 'ceremony' },
    { time: '8.00 pm', agenda: 'VIP guests seated/ garland ceremony', venue: 'Temple', type: 'ceremony' },
    { time: '', agenda: 'Speeches:\\nHG Patitapavana Caitanya prabhu\\nHG Lokabandhu Gauranga prabhu, ISKCON Malaysia President\\nHG Ciranjiva prabhu, Co-Regional Secretary ISKCON Malaysia\\nHG Simheswara prabhu, Co-Regional Secretary ISKCON Malaysia\\nHH Bhanu Swami, Co-Zonal Secretary for Malaysia\\nHH Jayapataka Swami, Co-Zonal Secretary for Malaysia', venue: 'Temple', type: 'session' },
    
  ],
  2: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa session', venue: 'Temple Hall', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (English) HH BVV Narasimha Swami (with Tamil translation)', venue: 'Temple Hall', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: 'Temple Hall', type: 'session' },
    { time: '9.00 - 10.00 am', agenda: 'Breakfast', venue: 'Prasadam Tent', type: 'meal' },
    { time: '10.15 am', agenda: 'English Session 1 - Outreach Preaching: Strategies to Sustain and Expand (HG Sankarsana Gaura prabhu)', venue: 'Temple Hall', type: 'session' },
    { time: '10.15 am', agenda: 'Tamil Session 1 - Sadhana with Impact (HG Balaram Govinda prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '10.15 am', agenda: 'Youth Session 1 - Expanding Outreach by Empowering Each Other (HH Bhakti Prachar Parivrajak Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '10.15 am', agenda: 'English Session 2 - Catur Sloki: Presenting BG in 4 verses as a Preacher (HH BVV Narasimha Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'English Session 3 - The Art of Appreciative Preaching: Uplift Before You Teach (HG Devakinandan prabhu)', venue: 'Temple Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'Tamil Session 2 - Preaching Begins at Home: Turning the Family into a Grihastha Āśrama (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'Youth Session 2 - From Reels to Mission: Being a Devotee Online - Part 1 (HH Bhakti Vinoda Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '12.00 pm', agenda: 'English Session 4 - Empowered to Preach: Inspirations from SP Lilamrta (HH Bhanu Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '1.30 - 2.30 pm', agenda: 'Lunch', venue: 'Prasadam Tent', type: 'meal' },
    { time: '3.00 - 4.30 pm', agenda: 'Rest', venue: '-', type: 'break' },
    { time: '4.45 pm', agenda: 'English Workshop 1 - Bhakti-vrksha & Beyond: Cultivating Devotees, Not Just Crowds HG Devakinandan prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Tamil Workshop 2 - Unite, Empower, Transform - A Spiritual Launch for the Tamil Speaking Community (HG Jagadhananda prabhu)', venue: 'Multi-purpose Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Youth Session 3 -  From Reels to Mission: Being a Devotee Online - Part 2 (HH Bhakti Vinoda Swami)', venue: 'Conference Hall', type: 'workshop' },
    
    { time: '6.00 - 7.00 pm', agenda: 'Dinner', venue: 'Prasadam Tent', type: 'meal' },
    { time: '7.00 pm', agenda: 'Launching Ceremony with VIPs + Cake Cutting Ceremony (MPH)', venue: 'Multi-purpose Hall', type: 'ceremony' },
    { time: '7.30 pm', agenda: 'Plenary Session with ISKCON Swamis: Preserving Srila Prabhupada\'s Legacy by Preaching Krishna Consciousness (with Tamil translation)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.15 pm', agenda: 'Drama - Servitude Through the Eyes of Kuresha', venue: 'Multi-purpose Hall', type: 'ceremony' },
    { time: '8.35 pm', agenda: 'Plenary Session: Appreciating ISKCON Malaysia History', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '9.35 pm', agenda: 'KIRTAN - by HG Pavan Nitai Prabhu', venue: 'Multi-purpose Hall', type: 'kirtan' }
  ],
  3: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa Session', venue: 'Temple Hall', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (HH Bhanu Swami) - with Tamil translation', venue: 'Temple Hall', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: 'Temple Hall', type: 'session' },
    { time: '9.00 - 10.00 am', agenda: 'Breakfast', venue: 'Prasadam Tent', type: 'meal' },
    { time: '10.00 am', agenda: 'Preaching best practices', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '10.30 am', agenda: 'Successful Preaching Strategy: Sharing from ISKCON Tirupalai, Madurai (HG Vamsidhari prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '11.15 am', agenda: 'English Session 5 - Diksha Tradition: the Connection to Preach (HH Bhanu Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '11.15 am', agenda: 'Tamil Session 3 - No One is Small: Every Devotee is a Force of Change based on Ramayana (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '11.15 am', agenda: 'Youth Session 4 - Bhakti That Connects: Reaching Your Generation (HG Devakinandan prabhu)', venue: 'Conference Hall', type: 'session' },
    { time: '11.15 am', agenda: 'English Session 6 - Srila Prabhupada: The Genius behind the Ultimate Outreach Strategy (HH Bhakti Prachar Parivrajak Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'English Session 7 - Cleansing the Mirror within, a Journey through Siksastakam (HH BVV Narasimha Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'Tamil Session 4 - Devotee Care as a Preaching Service (HG Jagadhananda prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'Bengali Session (HH Bhakti Prachar Parivrajak Swami)', venue: 'Conference Hall', type: 'session' },
    { time: '12.30 pm', agenda: 'English Session 10 - Studying Srila Prabhupada\'s Books Systematically: The Key to Empowered Preaching (HH Bhakti Vinoda Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '1.30 - 2.30 pm', agenda: 'Lunch', venue: 'Prasadam Tent', type: 'meal' },
    { time: '3.00 - 4.30 pm', agenda: 'Rest', venue: '-', type: 'break' },
    { time: '2.00 pm - 3.15 pm', agenda: 'HH JPS Special Instructions for Senior Disciples(HG Vrajeswar Gauranga Prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '3.15 pm - 4.30 pm', agenda: 'Temple Presidents/Leaders Workshop - How to Increase Sunday Feast Participation (HG Yaduraj Prabhu)', venue: 'Sri Bala Murugan Temple Hall', type: 'session' },
    { time: '4.45 pm', agenda: 'Workshop 3 English Session - Quality Sadhana & Philosophy: Foundation of becoming Good Devotees (HH Bhakti Prachar Parivrajak Swami)', venue: 'Temple Hall', type: 'session' },
    { time: '4.45 pm', agenda: 'Workshop 4 Tamil Session - Training and Tools for Effective Outreach (HG Jagat Sakshi prabhu)', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '4.45 pm', agenda: 'Youth Session 6 - From Reels to Mission: Being a Devotee Online - Part 3 (HH Bhakti Vinoda Swami)', venue: 'Conference Hall', type: 'workshop' },
    { time: '4.45 pm', agenda: 'Chinese Devotees Session (HH BVV Narasimha Swami)', venue: 'Sri Bala Murugan Temple Hall', type: 'workshop' },
    
    { time: '6.00 - 7.00 pm', agenda: 'Dinner', venue: 'Prasadam Tent', type: 'meal' },
    { time: '7.30 pm', agenda: 'Preaching best practices', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.00 pm', agenda: 'Video Presentation', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.10 pm', agenda: 'New Initiative Launching (Mobile App & Web Portal)\nAuction of Limited Edition Spiritual Paraphernalia', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '8.30 pm', agenda: 'Preaching Expo', venue: 'Multi-purpose Hall', type: 'session' },
    { time: '10.00 pm', agenda: 'Kirtan by HG Pavan Nitai prabhu', venue: 'Multi-purpose Hall', type: 'kirtan' }
  ],
  4: [
    { time: '5.00 am', agenda: 'Mangala Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.25 am', agenda: 'Tulasi Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '5.45 am', agenda: 'Japa session', venue: 'Temple Hall', type: 'kirtan' },
    { time: '7.30 am', agenda: 'Darshan Arati', venue: 'Temple Hall', type: 'ceremony' },
    { time: '7.45 am', agenda: 'Guru Puja', venue: 'Temple Hall', type: 'ceremony' },
    { time: '8.00 am', agenda: 'Srimad Bhagavatam (English) HH BVV Narasimha Swami (with Tamil translation)', venue: 'Temple Hall', type: 'session' },
    { time: '8.45 am', agenda: 'Announcements', venue: 'Temple Hall', type: 'session' },
    { time: '9.00- 10.00 am', agenda: 'Breakfast', venue: 'Prasadam Tent', type: 'meal' },
    { time: '10.00 am', agenda: 'Akshaya Patra (Lucky Draw)', venue: 'Temple Hall', type: 'ceremony' },
    { time: '10.15 am', agenda: 'Auction of Limited Edition Spiritual Paraphernalia', venue: 'Temple Hall', type: 'ceremony' },
    { time: '11.15 am', agenda: 'Speeches', venue: 'Temple Hall', type: 'session' },
    { time: '11.45 am', agenda: 'Appreciation sharing by delegates from: China, India, Australia, Singapore, Malaysia', venue: 'Temple Hall', type: 'session' },
    { time: '12.15 pm', agenda: 'Group Photo', venue: 'Temple Hall', type: 'ceremony' },
    { time: '12.30 pm', agenda: 'FINALE Kirtan by HG Pavan Nitai prabhu', venue: 'Temple Hall', type: 'kirtan' },
    { time: '1.00 pm', agenda: 'Lunch/ End', venue: 'Prasadam Tent', type: 'meal' }
  ]
};

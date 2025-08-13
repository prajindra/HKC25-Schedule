
'use client';

import { scheduleData } from '../lib/scheduleData';

interface ScheduleSectionProps {
  activeDay: number;
  setActiveDay: (day: number) => void;
}

export default function ScheduleSection({ activeDay, setActiveDay }: ScheduleSectionProps) {
  const days = [
    { day: 1, date: 'September 11', title: 'Opening Day' },
    { day: 2, date: 'September 12', title: 'Spiritual Growth' },
    { day: 3, date: 'September 13', title: 'Community Building' },
    { day: 4, date: 'September 14', title: 'Closing Ceremony' }
  ];

  // Group sessions by time for parallel display (only for Day 2 and 3)
  const groupSessionsByTime = (sessions: any[]) => {
    const grouped: { [key: string]: any[] } = {};

    sessions.forEach(session => {
      const timeKey = session.time || 'no-time';
      if (!grouped[timeKey]) {
        grouped[timeKey] = [];
      }
      grouped[timeKey].push(session);
    });

    return Object.entries(grouped).map(([time, sessions]) => ({
      time,
      sessions
    }));
  };

  const currentSchedule = scheduleData[activeDay] || [];
  const timeSlots = (activeDay === 2 || activeDay === 3) ? groupSessionsByTime(currentSchedule) : [];

  // Function to check if session involves HH Bhakti Vinoda Swami
  const isVinodaSwami = (agenda: string) => {
    return agenda.toLowerCase().includes('bhakti vinoda swami');
  };

  // Function to check if session involves HH BVV Narasimha Swami
  const isNarasimhaSwami = (agenda: string) => {
    return agenda.toLowerCase().includes('bvv narasimha swami');
  };

  // Function to check if session involves HG Jagat Sakshi prabhu
  const isJagatSakshi = (agenda: string) => {
    return agenda.toLowerCase().includes('jagat sakshi');
  };

  // Function to check if session involves HH Bhanu Swami (only for Day 2 and 3)
  const isBhanuSwami = (agenda: string) => {
    return (activeDay === 2 || activeDay === 3) && agenda.toLowerCase().includes('bhanu swami');
  };

  // Function to check if session involves HG Devakinandan prabhu
  const isDevakinandan = (agenda: string) => {
    return agenda.toLowerCase().includes('devakinandan');
  };

  // Function to check if session involves HH Bhakti Purusottama Swami
  const isPurusottamaSwami = (agenda: string) => {
    return agenda.toLowerCase().includes('purusottama swami');
  };

  // Function to check if session involves HH Bhakti Prachar Parivrajak Swami
  const isParivrjakSwami = (agenda: string) => {
    return agenda.toLowerCase().includes('bhakti prachar parivrajak swami');
  };

  // Function to check if session involves HG Nitai Priya prabhu (only for Youth Yoga Session on Day 2)
  const isNitaiPriya = (agenda: string) => {
    return activeDay === 2 && agenda.toLowerCase().includes('nitai priya') && agenda.toLowerCase().includes('yoga');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Convention Schedule</h2>
          <p className="text-xl text-yellow-200">Four days of spiritual growth and community building</p>
        </div>

        {/* Sticky Day Navigation */}
        <div className="sticky top-0 z-40 bg-purple-800/95 backdrop-blur-sm rounded-xl mb-8 p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {days.map((dayInfo) => (
              <button
                key={dayInfo.day}
                onClick={() => setActiveDay(dayInfo.day)}
                className={`p-4 rounded-lg text-center transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeDay === dayInfo.day
                    ? 'bg-yellow-500 text-purple-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="font-bold text-lg">Day {dayInfo.day}</div>
                <div className="text-sm opacity-90">{dayInfo.date}</div>
                <div className="text-xs mt-1 opacity-75">{dayInfo.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-purple-800 to-purple-600 p-6">
            <h3 className="text-2xl font-bold text-white">
              Day {activeDay} - {days.find(d => d.day === activeDay)?.date}
            </h3>
            <p className="text-yellow-200 mt-1">{days.find(d => d.day === activeDay)?.title}</p>
          </div>

          <div className="p-6">
            {/* Traditional Layout for Day 1 and Day 4 */}
            {(activeDay === 1 || activeDay === 4) && (
              <div className="space-y-4">
                {currentSchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row md:items-center p-4 rounded-lg border-l-4 ${
                      item.type === 'kirtan' ? 'bg-yellow-50 border-yellow-500' :
                        item.type === 'meal' ? 'bg-green-50 border-green-500' :
                          item.type === 'ceremony' ? 'bg-purple-50 border-purple-500' :
                            item.type === 'break' ? 'bg-blue-50 border-blue-500' :
                              item.type === 'session' ? 'bg-orange-50 border-orange-500' :
                                'bg-gray-50 border-gray-500'
                    } hover:shadow-md transition-shadow relative`}
                  >
                    {/* Centered image at top for HH Bhakti Vinoda Swami */}
                    {isVinodaSwami(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/66d923ca282b1bc657cbe62f9b919513.png"
                          alt="HH Bhakti Vinoda Swami"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HH BVV Narasimha Swami */}
                    {isNarasimhaSwami(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/bccc61eb3c1668142b3b546a7f292dd5.png"
                          alt="HH BVV Narasimha Swami"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HG Jagat Sakshi prabhu */}
                    {isJagatSakshi(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/a496b96345ce37722fb4586384acbdf5.png"
                          alt="HG Jagat Sakshi prabhu"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HG Devakinandan prabhu */}
                    {isDevakinandan(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/33f07cf0612e677fddce754982de95ff.png"
                          alt="HG Devakinandan prabhu"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HH Bhakti Purusottama Swami */}
                    {isPurusottamaSwami(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/2533a967a7eb17265c23f1501676dce4.png"
                          alt="HH Bhakti Purusottama Swami"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HH Bhakti Prachar Parivrajak Swami */}
                    {isParivrjakSwami(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/1c0c1bcbe995c97224900e94b52d8de0.png"
                          alt="HH Bhakti Prachar Parivrajak Swami"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    {/* Centered image at top for HG Nitai Priya prabhu (Youth Yoga Session Day 2 only) */}
                    {isNitaiPriya(item.agenda) && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/411278b129e2310547ddc40744a2c6d6.png"
                          alt="HG Nitai Priya prabhu"
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                        />
                      </div>
                    )}

                    <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0">
                      <span className="font-semibold text-purple-900 bg-purple-100 px-3 py-1 rounded-full text-sm">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 md:ml-6">
                      <div className="flex items-start">
                        {item.type === 'kirtan' && (
                          <i className="ri-music-line text-yellow-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                        )}
                        {item.type === 'meal' && (
                          <i className="ri-restaurant-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                        )}
                        {item.type === 'ceremony' && (
                          <i className="ri-leaf-line text-purple-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                        )}
                        {item.type === 'break' && (
                          <i className="ri-time-line text-blue-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                        )}
                        {item.type === 'session' && (
                          <i className="ri-presentation-line text-orange-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {item.agenda.split('\\n').map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                          </h4>
                          {item.venue && item.venue !== '-' && (
                            <p className="text-sm text-gray-600 flex items-center">
                              <i className="ri-map-pin-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                              {item.venue}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Parallel Layout for Day 2 and Day 3 */}
            {(activeDay === 2 || activeDay === 3) && (
              <div className="space-y-4">
                {timeSlots.map((timeSlot, slotIndex) => (
                  <div key={slotIndex} className="border-l-4 border-purple-500 pl-6">
                    {/* Time Header */}
                    {timeSlot.time !== 'no-time' && (
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-purple-900 bg-purple-100 inline-block px-3 py-1 rounded-full">
                          {timeSlot.time}
                        </h4>
                      </div>
                    )}

                    {/* Parallel Sessions Grid */}
                    <div
                      className={`grid gap-4 ${
                        timeSlot.sessions.length === 1 ? 'grid-cols-1' :
                          timeSlot.sessions.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                            timeSlot.sessions.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                              timeSlot.sessions.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                                'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
                      }`}
                    >
                      {timeSlot.sessions.map((session, sessionIndex) => (
                        <div
                          key={sessionIndex}
                          className={`rounded-lg p-4 border-l-4 ${
                            session.type === 'kirtan' ? 'bg-yellow-50 border-yellow-500' :
                              session.type === 'meal' ? 'bg-green-50 border-green-500' :
                                session.type === 'ceremony' ? 'bg-purple-50 border-purple-500' :
                                  session.type === 'break' ? 'bg-blue-50 border-blue-500' :
                                    session.type === 'session' ? 'bg-orange-50 border-orange-500' :
                                      'bg-gray-50 border-gray-500'
                          } hover:shadow-md transition-shadow relative`}
                        >
                          {/* Centered image at top for HH Bhakti Vinoda Swami */}
                          {isVinodaSwami(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/66d923ca282b1bc657cbe62f9b919513.png"
                                alt="HH Bhakti Vinoda Swami"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HH BVV Narasimha Swami */}
                          {isNarasimhaSwami(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/bccc61eb3c1668142b3b546a7f292dd5.png"
                                alt="HH BVV Narasimha Swami"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HG Jagat Sakshi prabhu */}
                          {isJagatSakshi(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/a496b96345ce37722fb4586384acbdf5.png"
                                alt="HG Jagat Sakshi prabhu"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HG Devakinandan prabhu */}
                          {isDevakinandan(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/33f07cf0612e677fddce754982de95ff.png"
                                alt="HG Devakinandan prabhu"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HH Bhakti Purusottama Swami */}
                          {isPurusottamaSwami(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/2533a967a7eb17265c23f1501676dce4.png"
                                alt="HH Bhakti Purusottama Swami"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HH Bhanu Swami */}
                          {isBhanuSwami(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/3dee49e845b4ec94734028e7a797159f.png"
                                alt="HH Bhanu Swami"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HH Bhakti Prachar Parivrajak Swami */}
                          {isParivrjakSwami(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/1c0c1bcbe995c97224900e94b52d8de0.png"
                                alt="HH Bhakti Prachar Parivrajak Swami"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Centered image at top for HG Nitai Priya prabhu (Youth Yoga Session Day 2 only) */}
                          {isNitaiPriya(session.agenda) && (
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                              <img
                                src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/411278b129e2310547ddc40744a2c6d6.png"
                                alt="HG Nitai Priya prabhu"
                                className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 bg-white shadow-lg"
                              />
                            </div>
                          )}

                          <div className="flex items-start mb-2">
                            {session.type === 'kirtan' && (
                              <i className="ri-music-line text-yellow-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                            )}
                            {session.type === 'meal' && (
                              <i className="ri-restaurant-line text-green-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                            )}
                            {session.type === 'ceremony' && (
                              <i className="ri-leaf-line text-purple-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                            )}
                            {session.type === 'break' && (
                              <i className="ri-time-line text-blue-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                            )}
                            {session.type === 'session' && (
                              <i className="ri-presentation-line text-orange-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                            )}
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800 mb-1 text-sm leading-tight">
                                {session.agenda.split('\\n').map((line, lineIndex) => (
                                  <div key={lineIndex}>{line}</div>
                                ))}
                              </h5>
                              {session.venue && session.venue !== '-' && (
                                <p className="text-xs text-gray-600 flex items-center">
                                  <i className="ri-map-pin-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                                  {session.venue}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

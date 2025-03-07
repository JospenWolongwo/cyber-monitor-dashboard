import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const data = [
  {
    date: '2024-01',
    Facebook: 2890,
    Instagram: 2338,
    TikTok: 3538,
  },
  {
    date: '2024-02',
    Facebook: 2756,
    Instagram: 2103,
    TikTok: 2509,
  },
  {
    date: '2024-03',
    Facebook: 3322,
    Instagram: 2194,
    TikTok: 2842,
  },
  // Add more data points as needed
];

const SocialMediaActivity = () => {
  return (
    <Card className="border border-[#2CB8C6] rounded-xl">
      <Title>Activité des réseaux sociaux</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data}
        index="date"
        categories={['Facebook', 'Instagram', 'TikTok']}
        colors={['#2CB8C6', 'pink', 'purple']}
        valueFormatter={(number: number) =>
          Intl.NumberFormat('fr').format(number).toString()
        }
      />
    </Card>
  );
};

export default SocialMediaActivity;

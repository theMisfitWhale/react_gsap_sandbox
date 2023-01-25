import React from 'react';
import Link from 'next/link';

export function ProjectThumbnail({ data }) {
  return (
    <Link href={data.url}>
      <div className="w-[24vw] cursor-pointer">
        <img
          className=" w-full h-auto rounded-3xl"
          src={data.thumbnail}
          alt={data.name}
        />

        <div className="flex flex-col items-start p-3">
          <div className="text-2xl my-2 font-medium ">{data.name}</div>
          <div className="flex gap-2">
            {data.lib.map((el, idx) => (
              <div className="text-neutral-500" key={idx}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
    </Link>
  );
}

import cn from 'classnames';
interface Props {
  className?: string;
  title: string;
  attributes: {
    id: number;
    value: string;
    meta: string;
  }[];
  active: string;
  onClick: any;
}

export const ProductAttributes: React.FC<Props> = ({
  className = 'mb-4',
  title,
  attributes,
  active,
  onClick,
}) => {
  return (
    <div className={className}>
      <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
        {title}
      </h3>
      <ul className="flex flex-wrap colors ltr:-mr-3 rtl:-ml-3">
        {attributes?.map(({ id, value, meta }) => (
          <li
            key={`${value}-${id}`}
            className={cn(
              'cursor-pointer rounded border  w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 ltr:mr-2 rtl:ml-2 ltr:md:mr-3 rtl:md:ml-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black',
              value === active ? 'border-black' : 'border-gray-100'
            )}
            onClick={() => onClick({ [title]: value })}
          >
            {title === 'color' ? (
              <span
                className="block w-full h-full rounded"
                style={{ backgroundColor: meta }}
              />
            ) : (
              value
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

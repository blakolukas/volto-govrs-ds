import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type AvatarProps = {
  name: string;
  size?: 'small' | 'medium' | 'large';
  letter?: boolean;
  iconic?: boolean;
  dropdown?: boolean;
  imageUrl?: string;
  menuItems?: Array<{ label: string; onClick: () => void }>;
};

// Color palette for avatars
const avatarColors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#FFA07A', // Light Salmon
  '#98D8C8', // Mint
  '#F7DC6F', // Yellow
  '#BB8FCE', // Purple
  '#85C1E2', // Light Blue
  '#F8B500', // Orange
  '#52B788', // Green
  '#E07A5F', // Coral
  '#81B29A', // Sage
  '#F4A261', // Peach
  '#E76F51', // Terra Cotta
  '#2A9D8F', // Teal Green
];

// Generate consistent color based on string
const getColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
};

function Avatar({
  name,
  size = 'medium',
  imageUrl,
  letter,
  iconic = false,
  dropdown,
  menuItems = [],
}: AvatarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backgroundColor = getColorFromName(name);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {dropdown ? (
        <div
          className="avatar--dropdown-wrapper"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleMenu();
          }}
        >
          <div className="avatar--dropdown">
            <div className={`avatar avatar--${size}`}>
              {!iconic ? (
                !letter ? (
                  imageUrl ? (
                    <img src={imageUrl} alt={name} />
                  ) : (
                    <span style={{ backgroundColor }}>{name.charAt(0)}</span>
                  )
                ) : (
                  <span style={{ backgroundColor }}>{name.charAt(0)}</span>
                )
              ) : (
                <div className="avatar-icon" style={{ backgroundColor }}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              )}
            </div>
            <div className="avatar--dropdown-content">
              <p>
                Olá, <b>{name.split(' ')[0]}</b>
              </p>
            </div>
            <button
              className="avatar--dropdown-trigger"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M4 10l4-4 4 4z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M4 6l4 4 4-4z" />
                </svg>
              )}
            </button>
          </div>
          {isMenuOpen && menuItems.length > 0 && (
            <div className="avatar--dropdown-menu">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="avatar--dropdown-menu-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    item.onClick();
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={`avatar avatar--${size}`}>
          {!iconic ? (
            !letter ? (
              imageUrl ? (
                <img src={imageUrl} alt={name} />
              ) : (
                <span style={{ backgroundColor }}>{name.charAt(0)}</span>
              )
            ) : (
              <span style={{ backgroundColor }}>{name.charAt(0)}</span>
            )
          ) : (
            <div className="avatar-icon" style={{ backgroundColor }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Avatar;

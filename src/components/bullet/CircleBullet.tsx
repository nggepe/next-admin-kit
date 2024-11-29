interface CircleBulletProps {
  size?: number;
  color?: string;
}

const CircleBullet = ({ size, color }: CircleBulletProps) => {
  return (
    <div
      style={{
        width: `${size ?? 10}px`,
        height: `${size ?? 10}px`,
        borderRadius: `${(size ?? 10) / 2}px`,
        background: color ?? "var(--accent-a10)"
      }}
    ></div>
  );
};

export default CircleBullet;

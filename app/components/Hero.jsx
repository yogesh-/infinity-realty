export default function Hero() {
  
return <div className="relative w-full h-screen overflow-hidden">
<video
  className="absolute inset-0 w-full h-full object-cover md:object-fill"
  autoPlay
  muted
  playsInline
  loop
  src="https://a1.estate/wp-content/uploads/2023/05/mobile.mp4"
  type="video/mp4"
/>
</div>

}
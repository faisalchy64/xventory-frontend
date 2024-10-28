import { Container, Image } from "react-bootstrap";
import about from "../assets/about.jpg";

export default function About() {
  return (
    <Container className="h-screen py-5">
      <h3 className="text-capitalize my-0">
        Revolutionizing inventory management for suppliers and business owners
      </h3>

      <Image
        src={about}
        alt="Hero image"
        className="w-100 img-height object-fit-cover my-4 rounded-4"
      />

      <p className="text-xs text-body-tertiary">
        At Xventory, we believe that managing inventory should be simple,
        efficient, and accessible for businesses of all sizes. That’s why we
        created a powerful platform where suppliers and business owners can
        seamlessly connect, manage products, and grow their operations-all from
        one intuitive system.
      </p>

      <h4>Our mission</h4>

      <p className="text-xs text-body-tertiary">
        Our mission is to simplify the way businesses handle inventory and
        procurement. Whether you're a supplier looking to streamline your
        product management or a business owner searching for the best products
        to stock your shelves, our platform is designed to save you time, reduce
        costs, and help you grow.
      </p>

      <h4>Who we are</h4>

      <p className="text-xs text-body-tertiary">
        Founded by a team of industry experts with years of experience in supply
        chain management and business operations, Xventory was born out of a
        desire to address the common pain points businesses face in managing
        their inventory. We understand the challenges of tracking products,
        managing orders, and maintaining supplier relationships. That’s why we
        built a platform that simplifies these processes, helping businesses
        focus on what really matters—delivering value to their customers.
      </p>

      <h4>Our vision for the future</h4>

      <p className="text-xs text-body-tertiary">
        We’re constantly evolving, driven by feedback from our community of
        users. Our goal is to build the most user-friendly, innovative, and
        reliable inventory management platform in the industry-helping
        businesses around the world become more efficient and profitable.
      </p>
    </Container>
  );
}

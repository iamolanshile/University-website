import React from "react";
import "./FaqAccordion.css";
import  Accordion  from "react-bootstrap/Accordion";

const FaqAccordion = () => {
  return <div className="faq-section">
    <div className="containerd-flex flex-columnalign-items-center">
        <h2 className="text-center text-capitalize mb-5">Frequently asked questions</h2>
        <p className="text-centermb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde consequuntur veniam expedita quidem nemo aperiam quia corporis magni explicabo ad voluptatibus, facere adipisci voluptates ducimus atque, accusantium id aspernatur.</p>
        <Accordion defaultActiveKey="" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>First question ?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure impedit dicta totam, animi nisi quisquam autem obcaecati officiis assumenda cupiditate non, mollitia eius dignissimos architecto culpa perferendis nobis tenetur?
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second question ?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure impedit dicta totam, animi nisi quisquam autem obcaecati officiis assumenda cupiditate non, mollitia eius dignissimos architecto culpa perferendis nobis tenetur?
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third question ?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure impedit dicta totam, animi nisi quisquam autem obcaecati officiis assumenda cupiditate non, mollitia eius dignissimos architecto culpa perferendis nobis tenetur?
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Fourth question ?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure impedit dicta totam, animi nisi quisquam autem obcaecati officiis assumenda cupiditate non, mollitia eius dignissimos architecto culpa perferendis nobis tenetur?
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  </div>;
};

export default FaqAccordion;

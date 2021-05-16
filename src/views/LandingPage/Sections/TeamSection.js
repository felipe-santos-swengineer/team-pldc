import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import pablo from "assets/img/faces/pablo.jpg";
import felipe from "assets/img/faces/felipe.jpg";
import elyneker from "assets/img/faces/elyneker.jpg";
import naelly from "assets/img/faces/naelly.jpg";
import henrique from "assets/img/faces/henrique.png";

import EmailIcon from '@material-ui/icons/Email';
import { grayColor } from "assets/jss/material-kit-react";

//Not convencinal call methods.. but react's crying today 

function call_pablo(){
  alert("Contate-me pelo email: pablo.soares@ufc.br");
}


function call_felipe(){
  alert("Contate-me pelo número: +55 88 99837-8028");
}


function call_henrique(){
  alert("Contate-me pelo número: +55 85 99763-4638");
}


function call_elyneker(){
  alert("Contate-me pelo número: +55 88 99979-4015");
}


function call_naelly(){
  alert("Contate-me pelo número: +55 88 99231-0653");
}

const useStyles = makeStyles(styles);

export default function TeamSection() {
  
 
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Aqui está nosso time:</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={pablo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Pabro Soares
                <br />
                <small className={classes.smallTitle}>Coordenador do Curso de Engenharia de Software</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Pablo Soares possui Doutorado em Ciência da Computação 
                pela Universidade Federal do Ceará. Atualmente 
                é professor adjunto da UFC Campus Russas, 
                coordenador do curso de Engenharia de Software e do 
                projeto Linha de Chegada. É cofundador do LP&D NEMO - 
                Laboratório de Pesquisa e Desenvolvimento do Núcleo de Estudos 
                em aprendizado de Máquina e Otimização, onde pesquisa nas áreas 
                de Otimização Combinatória, Aprendizado de Máquina e Grafos.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={call_pablo}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <EmailIcon style={{color: grayColor}}></EmailIcon>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/pablo-soares-578ab57a/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={felipe} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Felipe Santos
                <br />
                <small className={classes.smallTitle}>Aluno de Engenharia de Software</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Felipe Santos possui formação técnica em Administração pelo ensino
                profissional estadual. Atualmente é estudante de Bacharelado em Engenharia 
                de Software pela Universidade Federal do Ceará.
                Com interesses em desenvolvimento Full Stack em Android e Web.

                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={call_felipe}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-whatsapp"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/felipe-santos-rodrigues/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/felipe_santos_swengineer/"
                  target="_blank">
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={elyneker} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Elyneker Freire
                <br />
                <small className={classes.smallTitle}>Aluno de Engenharia de Software</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Elyneker Freire é estudante de Bacharelado em Engenharia 
                de Software pela Universidade Federal do Ceará.
                Com interesses em Arquitetura de Software, DDD (Domain-driven design),
                Desenvolvimento mobile Flutter e Empreendedorismo com foco em startups

                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={call_elyneker}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-whatsapp"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/elyneker-luciani/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={naelly} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Naelly Freire
                <br />
                <small className={classes.smallTitle}>Aluna de Engenharia de Software</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Naelly Freire é estudante de Bacharelado em Engenharia 
                de Software pela Universidade Federal do Ceará.
                Com interesses em Gerenciamento de projetos e Frontend Developer
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={call_naelly}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-whatsapp"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/naelly-freire-31a76b200/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/naellyfreiree/?igshid=1chju8k5dm8zz"
                  target="_blank">
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={henrique} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Henrique Moreira
                <br />
                <small className={classes.smallTitle}>Aluno de Ciência da Computação</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Henrique Moreira é estudante de Bacharelado em Ciência da Computação 
                pela Universidade Federal do Ceará. Com interesse em desenvolvimento Web.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={call_henrique}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-whatsapp"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

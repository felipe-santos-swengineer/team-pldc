import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vamos falar um pouco sobre nós{":"}</h2>
          <h5 className={classes.description}>
            Somos alunos dos cursos de Engenharia de Software e Ciência da computação
            pela Universidade Federal do Ceará no campus de Russas,
            contamos com o incrivel suporte do Prof.Dr.Pablo Soares durante a 
            longa jornada ao sucesso{"."}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Suporte por chat (Instagram e Whatsapp)"
              description="Temos uma equipe preparada para esclarecer todas as suas dúvidas a respeito
              das atividades complementares, estágio e TCC"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Privacidade dos dados"
              description="Não divulgamos qualquer informação compartilhada conosco, temos um ilustre código de ética"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

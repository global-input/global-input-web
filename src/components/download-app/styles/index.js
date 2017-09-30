import {images} from  "../../../configs";
export const styles={
      container:{
          height:400,
          width:700,
          backgroundImage:"url("+images.storeBackground+")",
          display:"flex",
          flexDirection: "column",
          magin:0,
          padding:0,
          justifyContent: "space-between",
          alignItems: "center"

      },
      fromStore:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width:"100%",
        magin:0,
        padding:0
      },
      storeImage:{
        magin:0,
        border:"solid 10 red",
        marginRight:"100px"
      },
      scanQrAction:{
        marginBottom:50,
        fontFamily: "'Roboto', sans-serif",
        fontSize: 20,
      }
}

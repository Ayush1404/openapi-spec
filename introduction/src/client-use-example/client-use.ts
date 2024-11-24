import { DefaultService } from "../generated";

async function main(){
    const res = await DefaultService.getUsers();
    console.log(res)
}

main();
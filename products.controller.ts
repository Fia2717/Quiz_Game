import { Controller, Post ,Body, Get, Param, Delete, Patch} from "@nestjs/common";
import {productService} from "./product.service";

@Controller('products')
export class productController
{
    constructor (private readonly productService: productService)
    {}

    @Post()
    addProduct(@Body('name') name:string, 
    @Body('description') description:string, 
    @Body('price') price:number) : any{
const generatedID=this.productService.insertPoduct(name,description,price);
return {id: generatedID};
    }

    @Get()
    GetAll() :any
    {
return this.productService.getAllP();

    }

    @Get(':id')
    getSingle(@Param('id')pID : string) : any
    {
        return this.productService.getSingalProduct(pID);
    }

    @Delete(':id')
    Deleteproduct(@Param('id')pID : string) : any
    {
         this.productService.Deleteproduct(pID);
         return null;
    }

    @Patch(':id')
    updateProduct(@Param('id')pID : string,@Body('name') name :string,@Body('Description') des : string, @Body('price') Price : number)
    {
     this.productService.updateproduct(pID,name,des,Price);
     return null;
    }
}
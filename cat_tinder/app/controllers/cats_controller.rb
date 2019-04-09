class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        cats = Cat.all
        if cat.valid?
            render json: cats
        else
            render json: cat.errors, status: :unprocessable_entity
        end
    end

    def update
        cat = Cat.find(params[:id])
        cat.update(name: params[:name], age: params[:age], enjoys: params[:enjoys])
        cats = Cat.all
        render json: cats
    end

    def destroy
        Cat.destroy(params[:id])
        cats = Cat.all
        render json: cats
    end

  # Handle strong parameters, so we are secure
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys)
    end
end

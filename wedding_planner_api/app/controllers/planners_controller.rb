class PlannersController < ApplicationController
    def index
        #render json: "Testing Route for Planner"
        planners = Planner.all
        render json: {status: 200, planners: planners}
    end

    def show
        planner = Planner.find(params[:id])
        render json: {status: 200, planner: planner}
    end

    def create
        planner = Planner.new(planner_params)
        if planner.save
            render(status: 201, json: {planner: planner})
        else
            render(status: 422, json: {planner: planner})
        end
    end

    def update
        planner = Planner.find(params[:id])
        planner.update(planner_params)
        render(json: {planner: planner})
    end   
    
    def destroy
        planner = Planner.destroy(params[:id])
        render(status: 204)
    end

    private

    def planner_params
        params.required(:planner).permit(:first_name, :last_name, :wedding_date)
    end
end
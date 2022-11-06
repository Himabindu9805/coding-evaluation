import Position from  "./Position.js";
import Employee from "./Employee.js";
class Organization {

  constructor(root) {
    this.printOrganization = (position, prefix) => {
      let str = `${prefix}+-${position.toString()}\n`;
      for (const p of position.getDirectReports()) {
        str = str.concat(this.printOrganization(p, `${prefix}  `));
      }
      return str;
    };

    this.getPositions = (position,a)=>{
      a.push(position)
      for(let p of position.getDirectReports()){
        this.getPositions(p,a);
      }
      return a;
    }

    // Hire the given person as an employee in the position that has that title
    // Return the newly filled position or undefined if no position has that title




    this.hire = (person, title) => {

      let positions = this.getPositions(root,[]);
      for(let i = 0;i<positions.length;i++){
        if(positions[i].getTitle()==title){
          let emp = new Employee(title,person)
          positions[i].setEmployee(emp);
          return positions[i];
        }
      }

      return undefined;
    };

    this.toString = () => this.printOrganization(root, '');
  };
}

export default Organization;

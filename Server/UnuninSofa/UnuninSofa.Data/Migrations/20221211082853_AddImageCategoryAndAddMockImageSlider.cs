using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class AddImageCategoryAndAddMockImageSlider : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ImageCategoryId",
                table: "Images",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ImageCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageCategories", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "057118ab-bbc0-4c8b-94c2-c3b143f845dc");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "5a85f852-ae41-4419-a377-e0fbd1d976a2");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ae5ae4b3-b142-4cb5-af5d-8341dbea15cd", "AQAAAAEAACcQAAAAECiNEoFbM6PA4Q7sTNtMuBpPS6DTUO1ie0slMEvSQQHT6qbgOPBFETW2PFCksfraJQ==", "9d21da38-7cb2-42e2-b3b3-4a445ddae9aa" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5973));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5982));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5983));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5984));

            migrationBuilder.InsertData(
                table: "ImageCategories",
                columns: new[] { "Id", "CreatedAt", "IsDeleted", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5998), false, "Sliders", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5999), false, "Products", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 1, new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6012), 1, "sofachinhdien.jpg", false, "Sofa chinh dien", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 2, new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6013), 1, "madeinitalysofa.jpg", false, "Made in Italy Sofa", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 3, new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6014), 1, "bobananceramic.jpg", false, "Bo Ban An Ceramic", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.CreateIndex(
                name: "IX_Images_ImageCategoryId",
                table: "Images",
                column: "ImageCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_ImageCategories_ImageCategoryId",
                table: "Images",
                column: "ImageCategoryId",
                principalTable: "ImageCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_ImageCategories_ImageCategoryId",
                table: "Images");

            migrationBuilder.DropTable(
                name: "ImageCategories");

            migrationBuilder.DropIndex(
                name: "IX_Images_ImageCategoryId",
                table: "Images");

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DropColumn(
                name: "ImageCategoryId",
                table: "Images");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "c6a4240e-abbf-445f-8b07-f0cea6e86f79");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "9879ebdc-8e9c-4110-911b-477f774ca2ee");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "73db84c8-80ca-401d-8120-8d88ac685122", "AQAAAAEAACcQAAAAEALgXUK2sVY6XdgxhCXaKbwY8Pq3LaISFiGUjrqAk6iAeo4Bj8wvqkkoi9yeqnGHLA==", "a08939a4-2ace-4b05-b03e-b413578e9a9d" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4846));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4868));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4870));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4871));
        }
    }
}

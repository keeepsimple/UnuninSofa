using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class RemoveImageCategoryAddSlider : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Sliders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sliders", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "f2530a4b-3202-42a0-8693-6155fb4a28d9");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "1a007b75-9fb2-4d74-958f-1b7ab6214ed9");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "95776ef3-529f-4712-9608-6945dcdea913", "AQAAAAEAACcQAAAAEKwziroGsgGxpgVLtlOqp0+IdXqKcnSMxr9px825fkRcpn6RfrW+ulqlk3HP2Zi1uQ==", "70898ab6-1e31-40cd-b5fb-09db88f613b5" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 16, 56, 36, 935, DateTimeKind.Local).AddTicks(4434));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 16, 56, 36, 935, DateTimeKind.Local).AddTicks(4452));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 16, 56, 36, 935, DateTimeKind.Local).AddTicks(4454));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 14, 16, 56, 36, 935, DateTimeKind.Local).AddTicks(4455));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sliders");

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
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                value: "def1fc9d-e9b9-4e8e-8213-441c0f30d5be");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "7ac08034-6bea-409c-886c-8538ea62dc06");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "adebd6ba-ed1e-4010-b305-18c5def3b7c1", "AQAAAAEAACcQAAAAEARXNIAN+DBIRDD0UsFXEt99OSNGWKBtgkzPzP7wUa4v2P95+0FR9KZeaE9/co3sbw==", "a4f64e5f-ffef-47bc-a037-6b15cf074928" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2033));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2044));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2045));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2047));

            migrationBuilder.InsertData(
                table: "ImageCategories",
                columns: new[] { "Id", "CreatedAt", "IsDeleted", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2066), false, "Sliders", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2067), false, "Products", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 1, new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2089), 1, "sofachinhdien.jpg", false, "Sofa chinh dien", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 2, new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2090), 1, "madeinitalysofa.jpg", false, "Made in Italy Sofa", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "CreatedAt", "ImageCategoryId", "ImageUrl", "IsDeleted", "Name", "ProductDetailId", "UpdatedAt" },
                values: new object[] { 3, new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2091), 1, "bobananceramic.jpg", false, "Bo Ban An Ceramic", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

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
    }
}
